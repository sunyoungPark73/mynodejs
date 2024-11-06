const express =  require('express');
const path =require('path');
const models =require('./models');//models/index.js를 호출
const multer = require('multer');
//models ==DB
//models.
const app =express();
const PORT =3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/downloads", express.static(path.join(__dirname, "public/uploads")));// added 2024.11.04
//reqhttp://localhost:3000/ downloads/ /test.png
//res : public/uploads/ /test.png

const upload_dir = "public/uploads"; //added 2024.11.04
const storage = multer.diskStorage({ // added 2024.11.04
    destination: `./${upload_dir}`,
    filename: function(req, file, cb) {//originalname: test.png
    cb(null,
        path.parse(file.originalname).name + // test
        "-"+
        Date.now()+
        path.extname(file.originalname) //.png
    ) 
}
});
const upload =multer({storage:storage});// added 2024.11. 4

app.post('/posts',upload.single("file"), async (req,res)=>{// added 2024.11. 4  
    const {title,content,author} =req.body;
    let filename =req.file ? req.file.filename :null;
    filename = `/downloads/${filename}`;
    const post = await models.Post.create({
        title :title,
        content:content,
        author:author,
    });
    res.status(201).json({post:post});
})
//select * from posts 
app.get("/posts",async(req,res)=>{
    const posts = await models.Post.findAll({
        //child table을 같이 보여준다
        include:[{model:models.Comment}]
    });
    res.json({data:posts});
});

app.get("/posts/:id",async(req,res)=>{
    const id = req.params.id;

    const post =await models.Post.findOne({
        where :{id:id}
    });
    if(post){
        res.status(200).json({data:post});
    }else{
        res.status(404).json({data:'post not found'});
    }
});
//==================== update post begin
app.put("/posts/:id",async(req,res)=>{
    const id =req.params.id;
    const {title,content} =req.body;
    const post = await models.Post.findByPk(id);
    if(post){
        post.title = title;
        post.content = content;
        await post.save();
        res.status(200).json({data:post});
    }else{
        res.status(404).json({result:"post not found"});
    }
})
//==================== update post end 

//====================delete post begin
app.delete("/posts/:id", async(req,res)=>{
    const result = await models.Post.destroy({
        where :{
            id:req.params.id
        }
    });
    console.log(result);
    if(result){
        res.status(204).send();
    }else{
        res.status(404).json({result:"post not found"}); 
    }
});
//=====================================
app.post("/posts/:id/comments", async(req,res)=>{
    const postId =req.params.id;
    const {content} =req.body;
    const comment = await models.Comment.create({
        PostId:postId,
        content:content,
    });
    res.status(201).json({data:comment});
})

//==================== update comment
app.put("/posts/:postId/comments/:commentId",async(req,res)=>{
    const postId =req.params.postId;
    const commentId =req.params.commentId;
    const {content} =req.body;
    const comment = await models.Comment.findByPk(commentId);
    if(comment){
        comment.content = content;
        await comment.save();
        res.status(200).json({data:comment});
    }else{
        res.status(404).json({result:"comment not found"});
    }
})
//==================== update comment end

//====================delete comment begin
app.delete("/posts/:id/comments/:commentId", async(req,res)=>{
    const commentId =req.params.commentId;
    const result = await models.Comment.destroy({
        where :{
            id:commentId
        }
    });
    console.log(result);
    if(result){
        res.status(204).json();
    }else{
        res.status(404).json({result:"post not found"}); 
    }
});
//=====================================

//====npx nodemon app.js로 실행
app.listen(PORT,()=>{
    console.log(`server listening on ${PORT}`);
    models.sequelize
        .sync({force :false})
        .then(()=>{
            console.log(`DB Connected`)
        })
        .catch((err)=>{
            console.err(`DB error: ${err}`);
            process.exit();
        });
})

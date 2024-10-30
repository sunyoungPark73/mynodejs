const express =  require('express');
const path =require('path');
const models =require('./models');//models/index.js를 호출
//models ==DB
//models.
const app =express();
const PORT =3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.post('/posts',async (req,res)=>{
    const {title,content,author} =req.body;
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
//==================== update
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
//====================delete
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
const express =require('express');
const mongoose =require('mongoose');
mongoose.connect("mongodb://localhost/post");
const db= mongoose.connection;

db.on("error",(err)=>{//error발생
    console.error(`db connect fail : ${JSON.stringify(err)}`);
});

db.once("open",()=>{//연결이 성공했을때
    console.log(`db connect success`) ;
});

//스키마만들기
const PostSchema = new mongoose.Schema({
    title:String,
    content:String,
    author:String,
    createdAt:{type:Date,default:Date.now},
});
const Post =mongoose.model('Post',PostSchema);

const app=express();
app.use(express.json());

app.post("/posts",async(req,res)=>{
    const{title,content,author} = req.body;
    try{
        const post =new Post({
            title:title,
            content:content,
            author:author,
        });
        await post.save();
        res.status(200).json({data : post,message :'ok'});
    }catch(e) {
        res.statu(500).json({message:e});
    }
});

//post list find
app.get("/posts",async(req,res)=>{
try{
    const posts= await Post.find({});
    res.status(200).json({data : posts,message :'ok'});
}catch(e){
    res.status(500).json({message:e});
}
});
//======
app.get("/posts/:id",async(req,res)=>{
    const{id} =req.params; //get localhost:3000/posts/67287abe4ff3ede6571c4ea0????
    try{
        const post= await Post.findById(id);
        res.status(200).json({data : post,message :'ok'});
    }catch(e){
        res.status(500).json({message:e});
    }  
});
//==update
app.put("/posts/:id",async(req,res)=>{
    const {id} =req.params;
    const{title,content} =req.body;
    try{
        const post =await Post.findByIdAndUpdate(
            id,
            {
             title:title,
             content:content,   
            },
            {new :true} //업테이드가 적용된 후의 문서를 반환한다.
        )
        res.status(200).json({data : post,message :'ok'});
    }catch(e){
        res.status(500).json({message:e});
    }

});
//===delete
app.delete("/posts/:id",async(req,res)=>{
    const{id} = req.params;
    try{
        await Post.findByIdAndDelete(id);
        res.status(204).send();
    }catch(e){
        res.status(500).json({message:e});
    }    
});
app.listen(3000,()=>{
    console.log(`server is running`);
});

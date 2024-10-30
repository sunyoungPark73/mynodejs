const express = require('express');
const app=express();
const PORT = 3000;
const fs =require('fs');

app.get("/",(req,res)=>{
    res.send("<h1>Hello world</h1>")
});

app.get("/write",(req,res)=>{
    const posts =[];
    for(let i=0;i<10;i++){
        posts.push({
            id:i,
            title :`테스트타이틀${i}`,
            content:`테스트네용${i}`
        });
    }
    fs.writeFileSync("test.json",JSON.stringify({data:posts}));
    res.send("<h1>test.json파일생성성공</h1>");
});

//app.get 숙제
app.get("/list",(req,res)=>{
   // res.setHeader('Content-type','application/json;charset=UTF-8');
    const data =fs.readFileSync('test.json','utf-8');
    const posts =JSON.parse(data).data;
    posts.forEach(x => {
        x.author ={ //x["author"] 와 같다.
            name :"박길동",
            email:"syp@naver.com"
        }
    });
    res.json({data:posts});//res.json을 쓰면 자동으로 객체를 json문자열로 반환
    //res.status(200).json({data:posts});//res.json을 쓰면 자동으로 객체를 json문자열로 반환
});

app.get("/view/:postId",(req,res)=>{
    const postId =req.params.postId;
    const data = fs.readFileSync("test.json","utf-8");
    const jsonObj =JSON.parse(data);
    const posts=jsonObj.data;
    const selectedPost =posts.filter(item=>{
        return item.id == postId;
    });
    console.log(selectedPost[0]);
    res.json({data:selectedPost[0]});
});

app.listen(PORT,()=>{
    console.log(`서버가 실행중입니다. ${PORT}에서`);
});

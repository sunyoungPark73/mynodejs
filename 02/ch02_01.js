const http =require('http');


const server =http.createServer((req,res)=>{
    res.statusCode =200; //200은 ok
    res.setHeader("Content-Type","text/plain");
    res.write("Hello world");
    res.end();
});

server.listen(4500);//server가 떠있어야함
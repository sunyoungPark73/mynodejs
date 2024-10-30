const http = require('http');
const url =require('url');
const fs =require('fs');


http.createServer((req,res)=>{
    const path =  url.parse(req.url,true).pathname;
    res.setHeader('Contente-Type','application/json;charset=UTF-8');
    if(path == '/json'){
        
        const data ={
            name :'lee',age:40, address:'서울시 양천구 신정동'
        }
        const result =JSON.stringify(data);
        res.end(result);
    }
    else if(path == '/test'){
        //http://localhost:4500/test
        //test2.json의 내용을 json포맷으로 클라이언트 응답을 보내주세요.
        const data =fs.readFileSync('test2.json','utf-8');
        //console.log('============');
        //console.log(typeof(result));
        const result =JSON.parse(data);//문자열을 json형태로 나눈다. @@@@핵심내용@@@@@
        const posts = result.data;
        res.end(JSON.stringify({
            data:posts
        }));
        res.end(data)
    }    
}).listen(4500); //객체에 . 메쏘드 체이닝
const fs = require('fs');
fs.readFile(`hello.txt`,`utf-8`,(err,data)=>{
    //1. 파일명 2. 인코딩 포맷 3. 콜백함수
    if(err){
        console.log(`error : ${err}`);
    }
    console.log(`data : ${data}`);
});
console.log(`===============`);
//동기식화일
const data = fs.readFileSync(`hello.txt`,`utf-8`);
 //1. 파일명 2. 인코딩 포맷
console.log(`readFileSync  : ${data}`);
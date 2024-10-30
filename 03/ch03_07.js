const fs = require ('fs');
const path =require('path');

const newFilePath =path.join(__dirname,'a3','b3','c3','d3.txt');
console.log(newFilePath);
console.log(path.parse(newFilePath).dir);
console.log(path.parse(newFilePath).base);

const makeFile=(fpath,content)=>{
    const filename = path.parse(fpath).base;
    if(filename.includes(".")){
        const dirname = path.parse(fpath).dir;
        fs.mkdirSync(dirname,{recursive:true});
        fs.writeFileSync(fpath,content);
    }
}

makeFile(newFilePath,`새로운화일이 생성되었습니다.`);
const fs = require('fs'); // 'fs'는 모듈이름

const content =`안녕안녕~~`;

// fs.writeFile(`out.txt`,content,(err)=>{
//     console.error(err)
// });

fs.writeFileSync(`out2.txt`,content,`utf-8`);
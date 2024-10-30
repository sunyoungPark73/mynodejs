const fs =require('fs');

const dirname="naver/daum/google"
fs.mkdirSync(dirname,{recursive:true});

const content =`
안녕하세요,네이버
구글
다음 중 하나에 입사하고 싶어용ddddd`;
//naver/daum/google/out.txt 에 content내용을 넣어주세요.

fs.writeFileSync(`${dirname}/out.txt`,content,`utf-8`);
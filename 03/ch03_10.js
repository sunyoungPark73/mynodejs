const fs =require('fs');

let posts =[];
for(let i=0;i<20;i++){
    posts.push(
        {
            title:`나는 제목이야[${i}]`,
            content :`나는 내용이야[${i}]`,
            author:`홍길동[${i}]`,
            createAt:new Date()
        }
    )
}

const data ={
    data : posts

}
const jsonStr = JSON.stringify(data,null,2);
//javascript object 를 json string으로
//json stringfy 2번째 인자는 replacer의미는 속성을 필터링 또는 변환할때 사용
//3번째 인자는 띄어쓰기 공백수 스페이스 2개만큼 인덴테이션
fs.writeFileSync("test2.json",jsonStr,"utf-8")
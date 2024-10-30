const fs=require('fs');

const result =fs.readFileSync('test.json','utf-8');
//console.log(typeof(result));
const data =JSON.parse(result);//문자열을 json형태로 나눈다. @@@@핵심내용@@@@@
const posts = data["data"]//array
posts.forEach(item => {
    console.log(item.title,item.content,item.author);
    //console.log(item['title'],item['content'],item['author']);

});
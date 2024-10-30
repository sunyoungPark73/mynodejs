let personInfo= {
    name :'lee',
    age:55,
    address:'서울 금천구 독산동 123',
    hobby:['독서','등산','낚시','넷플감상']
}
console.log(personInfo);
//console.log(JSON.stringify(personInfo));
console.log(personInfo['name']);
console.log(personInfo['age']);
console.log(personInfo.name);
console.log(`============`);
personInfo['gender']  ='M'
console.log(personInfo);

personInfo['address']  ='서울 양천구 목동';
console.log(personInfo);


//선언함수
function add1(x,y){ 
    console.log(`${x} ${y}`);
    const r =x+ y;
    return r;
}

console.log(`add1 result => ${add1(11,12)}`);
//익명함수
const add2 = function(x,y){ 
    console.log(`add2 x : ${add1(11,12)}`); 
    const r =x+ y;
    return r;
}

console.log(`add2 result => ${add2(11,12)}`);

//화살표함수
const add3 = (x,y)=> {
    console.log(`add3 x : ${x} ,y: ${y}`);
    const r =x+ y;
    return r;
}
console.log(`add3 result => ${add3(12,34)}`);

//return값만 있는 화살표함수
const add4 =(x,y) => x + y 
console.log(`add4 result => ${add4(12,34)}`);

let arr = [1,2,3,4,5,6,7,8,9,10];
arr.push(11);
arr.push(12);
arr.push(13);

arr.forEach((x,i) =>{ //x:element(필수) ,i: index(optional)
    console.log(`${x} ${i}`);
})

arr.forEach((x) =>{ //x:element(필수) ,i: index(optional)
    console.log(`X : ${x}`);
})
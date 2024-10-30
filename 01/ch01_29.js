const fetchData= ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const succcess =false;
            const data = {
                name:'lee',age:15
            }
            const error ={
                message : 'error 505'
            }
            if(succcess){
                resolve(data);
            }else{
                reject(error);
            }
        },2000);
    });
}

const result =fetchData();
result.then((data) => {
    console.log('resolve',data); //await와 같은 개념
}).catch((error)=>{
    console.log('reject',error);
})
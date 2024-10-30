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

async function getData() {
    try{
        const data = await fetchData();
        console.log(`fetchData result => ${data}`);
    }catch(e){
        console.error(e);
    }
    
}
getData();
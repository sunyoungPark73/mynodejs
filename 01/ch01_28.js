let data;

const fetchData = (cb) => { //cb:handleData
    setTimeout(()=>{
        data ={
            name:'lee',
            age:15
        };
        cb(data);
    },2000)
}

const handleData =(data) => {
    console.log(`from callback : ${JSON.stringify(data)}`);
}

fetchData(handleData);
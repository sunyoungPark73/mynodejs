const posts={
    data:[
        {
            title:'Test title',
            content:'Test content',
            author :{
                name:'lee',
                id:1,
                age:15
            }
        },
        {
            title:'Test title2',
            content:'Test content2',
            author :{
                name:'hong'  
            }
        },
        {
            title:'Test title3',
            content:'Test content3'
        }
    
    ]
}

posts['data'].forEach((item=>{

    // if('author' in item){
    //     console.log(item['author']['name']);
    //     console.log('-------');
    // }
    try{
        console.log(item['author']['name']);
    }catch(error){
        console.log(`error :${error}`);
    }finally{
        console.log('finally');
    }
}))
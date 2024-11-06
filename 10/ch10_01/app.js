const express =require('express');
const fs = require('fs');
const path =require('path');

//====import router
const userRoute =require('./routes/userRoute');
const postRoute =require('./routes/postRoute');
const models =require('./models');
//===models <= db
const app=express();
const PORT =3000;

app.use(express.json());
//====user router
app.use('/users',userRoute);
app.use('/posts',postRoute);

app.listen(PORT,()=>{
    console.log(`server is running on${PORT}`);
    models.sequelize.sync({force:false})//모델을 테이블로 생성 force : false이면 if not exists
    .then(()=>{
        console.log(`db connected`);
    }).catch((err)=>{
        console.err(`db connected error ${err}`);
        process.exit();
    });
})
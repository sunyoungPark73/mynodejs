const mongoose =require('mongoose');

(async()=>{
    await mongoose.connect("mongodb://localhost:27017/mydb");
    console.log(`connected to mongodb`);

    const { Schema } =mongoose;
    //create table
    const userSchema = new Schema({
        name:{type: String,require :true},
        age:{type:Number,min:0,max:120},
        city:{type:String,required:false}        
    });
    const User =mongoose.model('User',userSchema);//create collection(table)
    // const user1 =new User({name:'Alice',age:50,city:'Seoul'});
    // //insert into
    // const result1 = await user1.save();
    // console.log(`user1 : ${JSON.stringify(result1)}`);
    // //select * from User
    // const users =await User.find({});
    // console.log(`user list : ${JSON.stringify(users)}`);
    
    // const updateUser1 = await User.updateMany({name:'Alice', $set:{age:5}});
    // console.log(`Alice age is ${JSON.stringify(updateUser1)}`);
    //============delete
    const deleteUser1 =await User.deleteOne({name:'Alice'});
    console.log(`Alice  is deleted :${JSON.stringify(deleteUser1)}`);
    

    const users =await User.find({});
    console.log(`users list :${JSON.stringify(users)}`);
})();//즉시실행함수

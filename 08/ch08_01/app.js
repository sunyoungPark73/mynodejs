const {Sequelize,Model,DataTypes} =require('sequelize');
const sequelize =new Sequelize({
    dialect:'sqlite',
    storage :'post.db'
});

// `
//     create table User(
//     username varchar(100) not null,
//     email varchar(100) 
//     );
// `
//테이블create를 간단히 sequelize에서 아래처럼 사용한다.

const User =sequelize.define("User",{
    username:{
        type:DataTypes.STRING(100),
        allowNull:false,

    },
    email:{
        type:DataTypes.STRING(100),
        allowNull:true
    }
});
//즉시 샐행 비동기함수
(async()=>{
    await sequelize.sync({force:false});

    // const user1 = await User.create({
    //     username: 'user01',
    //     email:'user01@naver.com'
    // });
    // console.log(`user created=> ${JSON.stringify(user1)}`);

    // const users =await User.bulkCreate([
    //     {
    //         username : 'user02',email:'user02@naver.com'
    //     },
    //     {
    //         username : 'user03',email:'user03@naver.com'
    //     },
    //     {
    //         username : 'user04',email:'user04@naver.com'
    //     }
    // ]);

    // const users = await User.findAll(); //select * from Users;
    // users.forEach((user)=>{
    //     console.log(`id: ${user.id},username: ${user.username},email:${user.email},createdAt:${user.createdAt}`);
    // })

    await User.update({
        email:'user02@gmail.com'
    },{
        where :{
        username:'user02'
        }
    });
    const user = await User.findOne({
        where :{
            username :'user02'
        }
    });
    console.log(`user02 => ${JSON.stringify(user)}`);
    //delete
    const r = await User.destroy({
        where : {
            username:'user01'
        }
    });
    console.log(r);
})();
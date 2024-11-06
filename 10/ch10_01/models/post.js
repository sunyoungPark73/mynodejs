module.exports =(sequelize,DataTypes)=>{
    const Post = sequelize.define('Post',{
        id :{
            type:DataTypes.INTEGER,
            allowedNull:false,
            primaryKey:true,
            autoIncrement:true,
        },
        title:DataTypes.STRING,
        content:DataTypes.STRING,
        count:DataTypes.INTEGER,
    },{
        tableName:"posts"
    });
    Post.associate =function(models){//foreign key
        models.Post.belongsTo(models.User);//UserId fk create
    }
    return Post;
}
module.exports =(sequelize,DataTypes) =>{
    /**
     * create table      * (
     * id integer primary key autoincrement,
     * content text,
     * postId integer
     * foreign key(postId) references Posts(id))
     */
    const Comment= sequelize.define("Comment",{
        id:{
            type :DataTypes.INTEGER,
            allowedNull:false,
            primaryKey:true,
            autoincrement:true,
        },
        content :DataTypes.STRING,
    });
    //foreign key작업
    Comment.associate =function(models){
        models.Comment.belongsTo(models.Post);
    }
    return Comment;
}
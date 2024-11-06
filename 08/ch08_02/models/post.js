module.exports =(sequelize,DataTypes) =>{
    
    /**create 테이블생성**/
    const Post =sequelize.define("Post",{
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        content :DataTypes.STRING,
        authour :DataTypes.STRING,
        filename:{
            type:DataTypes.STRING,
            allowNull:true
        }
    });
    Post.associate =function(models){
        Post.hasMany(models.Comment);
    }
    return Post;
}
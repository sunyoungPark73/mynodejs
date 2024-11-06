const postDao = require('./postDao');

describe("Test post Dao", ()=>{
    test("createPost Test",async()=>{
        const data ={
            title :"Jest Test",
            content :"Jest Test",
            UserId:1
        }
        const result =await postDao.createPost(data);
        expect(result.title).toBe(data.title);
    });
    test("findall test",async()=>{

    });
    test("updatePost",async()=>{

    });
});
//npm run test
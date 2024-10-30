const { graphqlHTTP } = require('express-graphql');
const{buildSchema} =require('graphql');
const express =require('express'); 

const schema =buildSchema(`
    type Query {
        hello:String
        welcome(name:String!):String 
        }
    `);

    const root = {
        hello:()=>{
            return "Hello Graphql";
        },
        welcome:({name})=>{
            return `Welcome ${name}`;
        }
    }

    const app = express();
    app.use("/graphql",
        graphqlHTTP({
            schema : schema,
            rootValue:root,
            graphiql:true
        })
    );
    //"/graphql"은 localhost:4000/graphql
    //"/graphql"이 없으면 localhost:4000

    app.listen(4000);
   
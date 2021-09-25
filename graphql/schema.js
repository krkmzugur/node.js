// import Graphql
const {GraphQLSchema,GraphQLObjectType} =require("graphql");

// import Queries

const {  users } =require("./queries")

// import Mutations

const {  register  } =require("./mutations")


// import QueryType

const  QueryType  =new GraphQLObjectType({
    name:"QueryType",
    description:"Queries",
    fields:{ users }
});


// define MutationType

const MutationType  =new GraphQLObjectType({
    name:"MutationType",
    description:"Mutations",
    fields:{ register }
});

module.exports = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
});
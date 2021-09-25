const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} = require("graphql");

const { User } = require("../models");

 
const UserDetailType = new GraphQLObjectType({
  name: "UserDetail",
  description: "UserDetail Type",

  fields: () => ({
     
    userTitle: { type: GraphQLString },
    userCity: { type: GraphQLString },  
     
  }),
});
 
const UserType = new GraphQLObjectType({
  name: "User",
  description: "User Type",

  fields: () => ({
    id: { type: GraphQLID },
    userName: { type: GraphQLString },
    userLastname: { type: GraphQLString },
    userEmail: { type: GraphQLString },
    userPassword: { type: GraphQLString },
    userFirebaseToken: { type: GraphQLString },
    userActive: { type: GraphQLString },
    userImage: { type: GraphQLString },
    UserDetail: {
     type:UserDetailType
    }
   
  }),
});

module.exports = { UserType,UserDetailType };

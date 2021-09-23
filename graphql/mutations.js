const { GraphQLString, GraphQLList } = require("graphql");
//const {createJwtToken} = require("../util/auth")
const { UserType } = require("./types");
const { User } = require("../models");

const register = {
  type: UserType,
  args: {
    userName: { type: GraphQLString },
    userLastname: { type: GraphQLString },
    userEmail: { type: GraphQLString },
    userPassword: { type: GraphQLString },
    userFirebaseToken: { type: GraphQLString },
    userActive: { type: GraphQLString },
    userImage: { type: GraphQLString },
    userDetail: {
        userTitle:{type: GraphQLString},   
        userCity:{type: GraphQLString},
    },
  },
  async resolve(parent, args) {
    const {
      userName,
      userLastname,
      userEmail,
      userPassword,
      userFirebaseToken,
      userActive,
      userImage,
      userDetail :{
        userTitle,
        userCity
      }
    
    } = args;
    const user = new User({
      userName,
      userLastname,
      userEmail,
      userPassword,
      userFirebaseToken,
      userActive,
      userImage,
      userDetail: {
          userTitle,
          userCity
    }
    });

   

    const result = await user.save();
    console.log(result);
    return result;
  },
};

module.exports = { register };

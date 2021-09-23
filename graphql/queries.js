const {GraphQLList,GraphQLID } =require("graphql")
const {UserType } =require("./types")
const {User } =require("../models")

const users= {
    type: GraphQLList(UserType),
    description:"Get All Users",
    resolve(parent,args) {
        return User.find();
    }
}

module.exports = {  users }

const mongoose = require("mongoose");

 const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    userLastname: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    userPassword: {
      type: String,
      required: true,
    },
    userFirebaseToken: {
      type: String,
    },
    userActive: {
      type: String,
    },
    userImage: {
      type: String,
    },
    userDetail: {
      userTitle: {
        type: String,
      },
      userCity: {
        type: String,
      }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);

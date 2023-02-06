const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const schema = new mongoose.Schema(
    {
        name: {
            type: String, 
            required: [true, "name is required"], 
            match: /[A-Za-z].*/,
        },
        lastName: {
            type: String, 
            required: [true, "lastName is required"], 
            match: /[A-Za-z].*/ 
        },
        nickName: { type: String, unique: [true] },
        email: {
            type: String,
            required: [true, "email is required"],
            match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            unique: true,
        },
        password: {
            type: String,
            required: [true, "password is required"],
            match: /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        }
    },
    { timestamps: true }
);

schema.pre("save", function (next) {
    if (this.isModified("password")) {
      bcrypt
        .hash(this.password, 10)
        .then((encryptedPassword) => {
          this.password = encryptedPassword;
          next();
        })
        .catch(next);
    } else {
      next();
    }
  });
  
  module.exports = mongoose.model("User", schema);
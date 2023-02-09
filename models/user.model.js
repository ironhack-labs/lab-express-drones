const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is required"]
  },
  email: {
    type: String,
    required: [true, "email is required"],
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minLength: [8, "min length: 8"],
  },
},
  { timestamps: true }
)

userSchema.pre("save", function (next) {
  
  if(this.isModified("password")) {
    bcrypt.hash(this.password, 10)
    .then((encryptedPassword) => {
      this.password = encryptedPassword;
      next();
    })
    .catch(next);
  } else {
    next();
  }
})

const User = mongoose.model('User', userSchema);
module.exports = User;
const mongoose = require('mongoose')

const UserSchema = newmongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})

 export const UserModel = mongoose.model("users", UserSchema)
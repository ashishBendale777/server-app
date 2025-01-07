import mongoose from "mongoose";

let UserSchema = mongoose.Schema({
    username: String,
    useremail: String,
    usermobile: Number,
    usserpassword: String
})

export const User = mongoose.model('User', UserSchema)
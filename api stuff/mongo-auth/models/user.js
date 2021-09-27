import mongoose from "mongoose";

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    hash: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    type: {
        type: String,   //  employee / employer / admin
        required: true,
        default: "employee"
    }
})

mongoose.models = {};

var User = mongoose.model("User", userSchema);

export default User;
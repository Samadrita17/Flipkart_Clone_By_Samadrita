//validation of data:

import mongoose from "mongoose";

const userSchema = new mongoose.Schema
({
    firstname: {
        type:String,
        required: true,
        trim: true
    },
    lastname: {
        type:String,
        required: true,
        trim: true
    },
    username : {
        type:String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email : {
        type:String,
        required: true,
        trim: true,
        //unique: true,
        lowercase: true
    },
    password : {
        type:String,
        required: true,
    },
    phone: {
        type:String,
    }
});

//user is a collection and usin userschema, we will vadidate it
const user = mongoose.model('user' , userSchema);

export default user;
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required :true
    },
    email:{
        type : String,
        required :true
    },
    phone:{
        type : Number,
        required :true
    },
    password:{
        type : String,
        required :true
    },
    cpassword:{
        type : String,
        required :true
    },
})

// model is like collection
const User = mongoose.model('REGISTRATION' , userSchema);
module.exports = User;
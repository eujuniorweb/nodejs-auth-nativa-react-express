const mongoose = require('mongoose');
const validator  = require('validator');

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        minlength:5,
        trim:true,
        unique:true,
        validate:{
            validator:validator.isEmail,
            message: '{VALUE} is not a valid email',
        },
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    username:{
        type:String,
        required:true,
        minlength:4,
        trim:true,
        unique: true
    }

});

module.exports = mongoose.model('User',UserSchema);
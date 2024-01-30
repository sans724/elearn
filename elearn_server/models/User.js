import mongoose from "mongoose";

import validator from "validator";

const schema = new mongoose.Schema({
    name : {
        type : string,
        required :[true,"please enter your name"],
    },


    email : {
        type : string,
        required : [true,"please enter your email"],
        unique : true,
        validate : validator.isEmail,
    },

    password : {
        type : string,
        required : [true,"please enter your password"],
        minlength : [6,"password atleast 6 characters"],
        select : false,
    },

    role : {
        type : string,
        enum : ["Admin","User"],
        default:"User",
    },

    subscription : {
        id : string,
        status : string,
    },

    avtar : {
        public_id : {
            type : string,
            required : true,
        },
        url : {
            type : string,
            required : true,
        },
    },

    playlist : [
        {
            course : {
                type : string,
                ref : "Course",
            },
            poster : string,
        },
        
    ],

    createdAt : {
        type : Date,
        default : Date.now,
    },

    ResetPasswordToken : string,
    ResetPasswordExpire : string,

});


export const User = new mongoose.model("User",schema);

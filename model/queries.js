let mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    phone:{
        type: String
    },
    subject:{
        type: String
    }
})

userModel = mongoose.model('queries',userSchema);
module.exports = userModel;
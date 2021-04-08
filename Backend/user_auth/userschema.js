let mongoose = require('mongoose');
let schema = mongoose.Schema;
let userschema = new schema({
    user:{
        name: String,
        email: String,
        password: String
    }
});

module.exports = mongoose.model('signup',userschema);
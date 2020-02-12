const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = mongoose.Schema({
    name : {
        type: String,
    },
    email : {
        type: String,
        required: true,
    },
    username : {
        type: String,
        required: true,
    },
    password : {
        type: String,
        required: true,
    },
});

const User = module.exports = mongoose.model("User", UserSchema);

module.exports.getUserById = function(id, callback){
    const query = {_id: id};
    User.findOne(query, callback);
}

module.exports.getUserByEmail = function(email, callback){
    const query = {email: email};
    User.findOne(query, callback);
}

module.exports.getUserByUsername = function(username, callback){
    const query = {username: username};
    User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
    User.findOne({username : newUser.username}, (err, user) => {
        if(user) {
            callback(new Error("User already registered."), user);
        }
        else {
            User.findOne({email: newUser.email}, (err, user) => {
                if(user) {
                    callback(new Error("Email already registered."), user);
                }
                else {
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if(err) throw err;
                            newUser.password = hash;
                            newUser.save(callback);
                        });
                    });
                }
            })
        }
    });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}
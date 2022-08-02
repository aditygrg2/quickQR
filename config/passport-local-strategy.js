const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

// authentication using passport
passport.use(new LocalStrategy({
        usernameField: 'email'
    },
    function(email,password,done){
        //find a user and establish a identity
        User.findOne({email:email},function(err,user){
            if(err){
                console.log("Error in finding user ---> Passport");
                return done(err);
            }

            if(!user || user.password!=password){
                console.log("Invalid Username/Password");
                return done(null, false);
                // Done is a builtin function in passport and is fully syntax, this is how it works ! How it really works!
                // Done takes two arguments - first one is error and the second one is whether the authentication succeeds or not! Like if it is false, the authentication does not pass.
            }

            return done(null,user);
        })
    }
))

//Serializing the user to decide which key is to be kept in the cookie
passport.serializeUser(function(user,done){
    done(null,user.id);
})

//Deserializing the user from the key in the cookies
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log("Error in finding user");
            return done(err);
        }
        return done(null,user);
    })
})

module.exports = passport;
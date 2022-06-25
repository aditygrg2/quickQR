const cookieParser = require('cookie-parser');
const User = require('../models/user');

module.exports.profile = function(req,res){
    return res.end('<h1>User Profile</h1>');
}

module.exports.in = function(req,res){
    return res.render('signin');
}

module.exports.up = function(req,res){
    return res.render('signup');
}

module.exports.create = function(req,res){
    // req.body is the thing which helps in getting those post requests!
    if(req.body.password != req.body.re_password){
        return res.redirect('back');
    }
    User.findOne({email:req.body.email},function(err, user){
        if(err){
            console.log("Error in finding !", err);
            return;
        }
        if(!user){
            User.create(req.body,function(err,user){
                if(err){console.log(err);return;}
                return res.redirect('/users/signin');
            })
        }
        else{
            return res.redirect('back');
        }
    })
}

module.exports.createSession = function(req,res){
    User.find({email: req.body.email},function(err,user){
        if(err){
            console.log(err);
            return;
        }
        if(user){
            if(user.password != req.body.password){
                console.log(user.password, req.body.password);
                console.log("Password mismatch!");
                return res.redirect('back');
            }
            // Create session
            else{
                res.cookie('user_id',user.id);
                return res.redirect('users/profile');
            }
        }
    })
}
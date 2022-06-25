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
        }else{
            return res.redirect('back');
        }
        
    })
}

module.exports.createSession = function(req,res){

}
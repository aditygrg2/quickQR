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

}

module.exports.createSession = function(req,res){
    
}
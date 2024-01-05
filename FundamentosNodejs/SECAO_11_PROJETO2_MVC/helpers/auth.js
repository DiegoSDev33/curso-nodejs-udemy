module.exports.checkAuth = function(req, res, next){

const userId = req.session.id

if(!userId){
  res.redirect('/login')
}
next()
}
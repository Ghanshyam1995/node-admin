var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login',(req,res)=>{
  res.render("login",{title :"Login"});
});

router.get("/register",(req,res)=>{
  res.render("signup",{title :"Register"});
})
module.exports = router;

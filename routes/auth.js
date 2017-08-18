var express=require("express");
var router=express.Router();

router.get("/",(req,res)=>{
  res.redirect('/auth/login');
});

router.post("/login",(req,res)=>{
    res.render("login",{title :"Login"});
});

var models = require('./db/models/');
var users=require("./db/controllers/users");

// test Connection to database

models.sequelize
  .authenticate()
  .then(function () {
    console.log('Connection is Successfull');
    console.log(users.findbyEmail());
  })
  .catch(function(error) {
    console.log("Error creating connection:", error);
  });
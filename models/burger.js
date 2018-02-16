// import ORM
var orm = require("../config/orm.js");

// burger specifc ORM uses
var burger = {
  // select * burgers
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // insert burger
  insert: function(name, cb) {
    console.log("burger name: == " + name);
    orm.insertOne("burgers", "burger_name", name, function(res) {
      cb(res);
    });
  },
  // set burger devoured value
  update: function(id, cb) {
    orm.updateOne("burgers", "devoured", true, "id", id, function(res) {
      cb(res);
    });
  }
};

// burger.all( function(res) {
//   console.log(res);
// });

// Export the database functions for the controller
module.exports = burger;
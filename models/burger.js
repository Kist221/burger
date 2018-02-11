// import ORM
var orm = require("../config/orm.js");



// select * burgers
orm.selectAll("burgers");

// insert burger
orm.insertOne("burgers", "burger_name", "Burger Four");

// set burger devoured value
orm.updateOne("burgers", "devoured", true, "id", 4);


var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insert: function(name, cb) {
    orm.insertOne("burgers", "burger_name", name, function(res) {
      cb(res);
    });
  },
  update: function(id, cb) {
    orm.updateOne("burgers", "devoured", true, "id", id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = cat;
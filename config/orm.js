// Import MySQL connection.
var connection = require("../config/connection.js");

// orm preset queries
var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function(tableInput, itemInput, newItem, cb) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(queryString, [tableInput, itemInput, newItem], function(err, result) {
      if (err) throw err;
      console.log(queryString);
      cb(result);
    });
  },
  updateOne: function(tableInput, setProperty, newValue, whereRef, matchesVal, cb) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    console.log(queryString);
    connection.query(queryString, [tableInput, setProperty, newValue, whereRef, matchesVal], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

// orm.insertOne("burgers", "burger_name", "testing", function(res) {
//   console.log(res);
//   cd(res);
// })

// Export the orm
module.exports = orm;
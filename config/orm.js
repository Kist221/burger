// Import MySQL connection.
var connection = require("../config/connection.js");

// orm preset queries
var orm = {
  selectAll: function(tableInput) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: function(tableInput, itemInput, newItem) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    console.log(queryString);
    connection.query(queryString, [tableInput, itemInput, newItem], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function(tableInput, setProperty, newValue, whereRef, matchesVal) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    console.log(queryString);
    connection.query(queryString, [updateTable, setProperty, newValue, whereRef, matchesVal], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  }
};

// Export the orm
module.exports = orm;
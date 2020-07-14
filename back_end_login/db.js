var todos = require("./todos.json");
var user = require("./user.json");
var fornecedor = require("./fornecedor.json")
//var thirdRoute = require("./jsonfile3.json");
//var fourthRoute = require("./jsonfile4.json");
// and so on

module.exports = function () {
  return {
    todos,
    user,
    fornecedor
    // and so on
  };
};

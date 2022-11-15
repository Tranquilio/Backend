const express = require("express");
 
// apiRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests 
const questionRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../conn");
 
// This section will help you get a list of all the questions.
questionRoutes.route("/api/questions").get(function (req, res) {
   let db_connect = dbo.getDb();
   cursor = db_connect.collection("questions").find({});
   cursor.toArray(function (err, result) {
      if (err) throw err;
      res.json(result[result.length -1]);
   });
});
 
module.exports = questionRoutes;
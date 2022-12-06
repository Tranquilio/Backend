const express = require("express");
const bodyParser = require('body-parser');
const loginRoutes = require('./routes/login');
const authRoutes = require('./routes/auth')
const app = express();
const cors = require("cors");
//Write config variables here
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(loginRoutes)
app.use(authRoutes)
app.use(require("./routes/questions"));
app.use(require("./routes/typeform"));
app.use(require("./routes/scores"));
app.use(require("./routes/employees"));
// get driver connection
const dbo = require("./conn");
 
app.listen(port, () => {
  // perform a database connection when server starts
dbo.connectToServer(function (err) {
  if (err) console.error(err);
});
  console.log(`Server is running on port: ${port}`);
}); 

//module.exports = app;
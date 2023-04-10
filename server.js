const express = require("express");
const assessmentRoutes = require('./routes/assessmentRoutes')
const dashboardRoutes = require('./routes/dashboardRoutes')
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(assessmentRoutes)
app.use(dashboardRoutes)

const dbo = require("./conn");

app.listen(port, () => {
dbo.connectToServer(function (err) {
  if (err) console.error(err);
});
 console.log(`Server is running on port: ${port}`);
}); 

module.exports = app;

const bodyParser = require("body-parser");
const express = require("express");
const app = express();
// const path = require("path")
// const ngoschema = require("./mongoSchema/mongoschemango");
const db = require("./mongo/database");

// const userRoute = require('./routes/user');
// const blogRoute = require('./routes/blog');
const cors = require('cors')
const { config } = require('dotenv');
const port = 4000;



config();
app.use(bodyParser.json())
app.use(express.json())
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(express.urlencoded({
  extended: false
}));


const AuthRoute = require("./routes/Auth");
app.use("/auth", AuthRoute);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

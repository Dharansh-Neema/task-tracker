const express = require("express");
const app = express();
const db_connection = require("./config/db");
// DOTENV config
require('dotenv').config()
//Common middleware
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.json());
// DB connection
db_connection();

//Router 
const userRouter = require("./router/userrouter");
const projectRouter = require("./router/projectRouter");

app.use("/api/v1", userRouter);
app.use("/api/v1/projects", projectRouter);
// PORT
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

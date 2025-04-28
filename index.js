const express = require("express");
const app = express();
const db_connection = require("./config/db");
// DOTENV config
require('dotenv').config()

// DB connection
db_connection();

// PORT
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
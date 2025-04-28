const express = require("express");
const app = express();

// DOTENV config
require('dotenv').config()

// PORT
const PORT = process.env.PORT || 8080
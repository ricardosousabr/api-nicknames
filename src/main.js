const express = require("express");
const myapp = express();
require("dotenv").config();

myapp.listen(process.env.PORT, () => console.log("Rodando"));

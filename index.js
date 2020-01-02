require("dotenv/config");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

const helmet = require("helmet");
const cors = require("cors");
const router = require("./src/Routes/index");

const index = express();

index.listen(process.env.PORT, () => console.log("Server Berjalan"));
index.use(logger("dev"));
index.use(helmet.xssFilter());
index.use(cors());
index.use(bodyParser.urlencoded({ extended: false }));
index.use(bodyParser.json());

index.use("/", router);
module.exports = index;

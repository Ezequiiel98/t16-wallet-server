const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const { notFoundResponse } = require("./middleware");
const router = require("./routes");

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(router);
app.use(notFoundResponse);

module.exports = app;

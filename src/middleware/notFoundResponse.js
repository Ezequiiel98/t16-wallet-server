const { Response } = require("../utils");
const { CustomError } = require('../utils');

const notFoundResponse = (_, res) => {
  Response.error(res, "404 Not Found.", "404 Not Found", 404, true);
};

module.exports = notFoundResponse;

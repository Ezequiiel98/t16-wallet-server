const { Response } = require("../utils");

const notFoundResponse = (_, res) => {
  Response.error(res, "404 Not Found.", "404 Not Found", 404);
};

module.exports = notFoundResponse;

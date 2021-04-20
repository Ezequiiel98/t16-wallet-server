const { validationResult } = require("express-validator");
const { Response } = require("../utils");

const bodyValidator = (arrayOfChecks, check = "body") => async (req, res, next) => {
  await Promise.all(
    arrayOfChecks.map((paramsToValidate) => paramsToValidate.run(req[check]))
  );

  const errors = validationResult(req);
  const errorMessage = errors.array()[0].msg;

  if (!errors.isEmpty())
    return Response.error(res, errorMessage, errorMessage, 400);

  next();
};

module.exports = bodyValidator;

const Response = require('./Response');

const controllerWithTryCatch = ({ controller, sucessStatusCode }) => {
  return async (req, res, ...restParams) => {
    try {
      const data = await controller(req, res, ...restParams);

      Response.success(res, data, sucessStatusCode);
    } catch (error) {
      Response.error(
        res, 
        error,
        error.message,
        error.status,
      );
    }
  }
};

module.exports = controllerWithTryCatch;

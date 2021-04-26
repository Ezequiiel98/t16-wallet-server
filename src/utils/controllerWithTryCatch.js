const Response = require('./Response');

const controllerWithTryCatch = ({ controller, sucessStatusCode }) => {
  return async (req, res, ...restParams) => {
    try {
      const data = await controller(req, res, ...restParams);

      Response.success(res, data, sucessStatusCode);
    } catch (error) {
      const expectedError = error.name === 'CustomError';
      Response.error(
        res, 
        error,
        error.message,
        error.status,
        expectedError,
      );
    }
  }
};

module.exports = controllerWithTryCatch;

class Response {
  static success (res, data = {}, status = 200) {
    return res.status(status).send({
      ok: true,
      status,
      data
    })
  }

  static error (res, err, message, status = 500, expectedError = false) {
    const defaultError = 'Hubo un error inesperado';
    const errorMessage = expectedError ? message : defaultError;
    
    return res.status(status).send({
      ok: false,
      status,
      errors: [{ error: errorMessage }],
    })
  }
}

module.exports = Response

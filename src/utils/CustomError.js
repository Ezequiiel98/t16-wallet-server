class CustomError extends Error {
  constructor(data = { 
    message: 'Hubo un error inesperado.',
    status: 500,
  }) {
    const message = typeof data === 'string' ? data : data.message;
    super(message);
    this.name = 'CustomError';
    this.status = data.status; 
  }
}

module.exports = CustomError;




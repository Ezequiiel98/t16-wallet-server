const db = require("../db/models");
const CustomError = require("../utils/CustomError");
const { RefundRepository } = require("../utils/dataAccess/repositories");
const repository =  new RefundRepository(db);

const getAllRefunds = async () => {
  
  const refundsFromDB = await repository.getAll();

  if (!refundsFromDB) throw new CustomError({ status: 400, message: 'No se encontró ningún registro' })

  return { refunds: refundsFromDB };
};

module.exports = {
  getAllRefunds,
};

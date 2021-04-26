const db = require("../db/models");
const CustomError = require("../utils/CustomError");

const getAllTransactions = async () => {
  const transactionsFromDB = await db.Transaction.findAll();

  if (!transactionsFromDB) throw new CustomError({ status: 400, message: 'No se encontró ningún registro' })

  return { transactions: transactionsFromDB };
};

module.exports = {
  getAllTransactions,
};

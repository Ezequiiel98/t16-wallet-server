const db = require("../db/models");

const getAllTransactions = async () => {
  const transactionsFromDB = await db.Transaction.findAll();

  return { transactions: transactionsFromDB };
};

module.exports = {
  getAllTransactions,
};

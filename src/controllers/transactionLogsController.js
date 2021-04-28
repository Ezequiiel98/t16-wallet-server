const db = require("../db/models");
const CustomError = require("../utils/CustomError");

const getAllTransactionLogs = async () => {
  const transactionLogsFromDB = await db.TransactionLog.findAll();

  if (!transactionLogsFromDB) throw new CustomError({ status: 400, message: 'No se encontró ningún registro' })

  return { transactionLogs: transactionLogsFromDB };
};

module.exports = {
  getAllTransactionLogs,
};

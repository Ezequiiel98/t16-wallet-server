const db = require("../db/models");
const CustomError = require("../utils/CustomError");

const getAllAccounts = async () => {
  const accountsFromDB = await db.Account.findAll()

  if (!accountsFromDB) throw new CustomError({ status: 400, message: 'No se encontró ningún registro' })

  return { accounts: accountsFromDB };
};

module.exports = {
  getAllAccounts,
};
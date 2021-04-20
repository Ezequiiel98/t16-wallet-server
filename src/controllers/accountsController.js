const db = require("../db/models");

const getAllAccounts = async () => {
  const accountsFromDB = await db.Account.findAll();

  return { accounts: accountsFromDB };
};

module.exports = {
  getAllAccounts,
};
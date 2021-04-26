const db = require("../db/models");
const CustomError = require("../utils/CustomError");

const getAllAccounts = async () => {
  const accountsFromDB = await db.Account.findAll({
    include: {
      model: db.Transaction,
      as: "transactions",
      attributes: ["amount", "concept", "type", "isEditable"],
    }
  })

  if (!accountsFromDB) throw new CustomError({ status: 400, message: 'No se encontró ningún registro' })

  return { accounts: accountsFromDB };
};

module.exports = {
  getAllAccounts,
};
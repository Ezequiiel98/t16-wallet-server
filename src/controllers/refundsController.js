const db = require("../db/models");
const CustomError = require("../utils/CustomError");

const getAllRefunds = async () => {
  const refundsFromDB = await db.Refund.findAll({
    include: {
      model: db.Transference,
      as: "originalTransference",
      // include: [
      //   {
      //     model: db.Account,
      //     as: "accountIssuer",
      //     foreignKey: "accountIssuerId"
      //   },
      //   {
      //     model: db.Account,
      //     as: "accountAcquier",
      //     foreignKey: "accountAcquierId"
      //   }, 
      // ]         
    },
  });

  if (!refundsFromDB) throw new CustomError({ status: 400, message: 'No se encontró ningún registro' })

  return { refunds: refundsFromDB };
};

module.exports = {
  getAllRefunds,
};

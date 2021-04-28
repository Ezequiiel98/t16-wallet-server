const db = require("../db/models");
const CustomError = require("../utils/CustomError");

const getAllDeposits = async () => {
  
  const depositsFromDB = await db.FixedTermDeposit.findAll({
    include: {
      model: db.Transaction,
      as: "transactions",
      attributes: {
        exclude: ["transferenceId","depositId"]
      }  
    }
  })

  if (!depositsFromDB) throw new CustomError({ status: 400, message: 'No se encontró ningún registro' })

  return { fixed_term_deposits: depositsFromDB };
};

module.exports = {
  getAllDeposits,
};

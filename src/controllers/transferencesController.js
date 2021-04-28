const db = require("../db/models");
const CustomError = require("../utils/CustomError");

const getAllTransferences = async () => {
  const transferencesFromDB = await db.Transference.findAll({
    include: {
      model: db.Transaction,
      as: "transactions", 
      attributes: {
        exclude: ["transferenceId","depositId"]
      }   
    }
  });

  if (!transferencesFromDB) throw new CustomError({ status: 400, message: 'No se encontró ningún registro' })

  return { transferences: transferencesFromDB };
};

module.exports = {
  getAllTransferences,
};

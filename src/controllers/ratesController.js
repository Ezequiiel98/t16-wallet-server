const db = require("../db/models");
const CustomError = require("../utils/CustomError");

const getAllRates = async () => {
  
  const ratesFromDB = await db.Rate.findAll({
    include: {
      model: db.Currency,
      as: "baseCurrency",       
    }
  });

  if (!ratesFromDB) throw new CustomError({ status: 400, message: 'No se encontró ningún registro' })

  return { rates: ratesFromDB };
};

module.exports = {
  getAllRates,
};

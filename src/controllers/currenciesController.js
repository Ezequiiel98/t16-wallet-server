const db = require("../db/models");
const CustomError = require("../utils/CustomError");

const getAllCurrencies = async () => {
  const currenciesFromDB = await db.Currency.findAll();

  if (!currenciesFromDB) throw new CustomError({ status: 400, message: 'No se encontró ningún registro' });

  return { currencies: currenciesFromDB };
};

module.exports = {
  getAllCurrencies,
};
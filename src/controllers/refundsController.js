const db = require("../db/models");
const CustomError = require("../utils/CustomError");
const UnitOfWork = require("../utils/dataAccess/UoW/UnitOfWork");
const uow =  new UnitOfWork(db);

const getAllRefunds = async () => {
  
  await uow.init()

  const refundsFromDB = await uow.RefundRepository().getAll();
  
  await uow.commit()

  if (!refundsFromDB) throw new CustomError({ status: 400, message: 'No se encontró ningún registro' })

  return { refunds: refundsFromDB };
};

module.exports = {
  getAllRefunds,
};

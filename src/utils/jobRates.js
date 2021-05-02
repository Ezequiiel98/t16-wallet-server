const cron = require('node-cron');
const axios = require('axios');

const db = require("../db/models");
const CustomError = require("./CustomError");

const URL = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';

const runDailyJobForRates =  () => {  
  cron.schedule('0 0 10 * * *', async () => {    
    try {
      // Get dolaer rate from api
      const { data } = await axios.get(URL);
      const oficialDolarRate = data[0].casa;

      // Prepare object
      const { compra, venta } = oficialDolarRate; 
      const rate = {
        date: new Date,
        buy: parseStringCommaToFloat(compra),
        sell: parseStringCommaToFloat(venta),
        currencyId: 2
      }

      // Save in db   
      const rateFromDB = await db.Rate.create(rate); 
      if (!rateFromDB) throw new CustomError({ status: 500, message: 'No se pudo crear el registro' });

    } catch (error) {      
      console.log(new CustomError())
    }
  },
  { 
    scheduled: true,
    timezone: 'America/Argentina/Buenos_Aires' 
  });
}

const parseStringCommaToFloat = (string) => {
  return parseFloat(string.replace(',', ''))
}

module.exports =  runDailyJobForRates;
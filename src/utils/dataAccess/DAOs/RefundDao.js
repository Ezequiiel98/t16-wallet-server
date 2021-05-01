class RefundDao {
  constructor(db) { 
    this.db = db;     
  }

  async getAllRefunds() {    
    const refundsFromDB = await this.db.Refund.findAll({
      include: {
        model: this.db.Transference,
        as: "originalTransference",                
      },
    });     
  
    return refundsFromDB; 
  }

  getRefundById(id) {

  }

  insertRefund() {

  }

  deleteRefund(id) {

  }

  updateRefund(id) {

  }
}

module.exports = RefundDao;




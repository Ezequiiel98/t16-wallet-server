const { RefundRepository } = require("../repositories");

class UnitOfWork {
  constructor(db) { 
    this.db = db; 
  }

  async init() {
    this.t = await this.db.sequelize.transaction(); 
  }

  RefundRepository() { 
    return new RefundRepository(this.db);  
  } 
  
  commit() {
    this.t.commit();
  }
}

module.exports = UnitOfWork;




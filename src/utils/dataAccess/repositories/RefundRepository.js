const { RefundDao } = require('../DAOs');

class RefundRepository {
  constructor(db) { 
    this.db = db;     
    this.dao = new RefundDao(this.db);
  }

  getAll() {      
    return this.dao.getAllRefunds();
  }

  getById(id) {

  }

  insert() {

  }

  delete(id) {

  }

  update(id) {

  }
}

module.exports = RefundRepository;




const db = require('../database');

class Cities {
  static retrieveAll (callback) {//get
    db.query('SELECT * from presupuesto', (err, res) => {
   
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

  
  static insert (city, callback) {//post
    db.query('INSERT INTO presupuesto (presupuesto_nconsejo) VALUES ($1)', [city], (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }
}

module.exports = Cities;
const db = require('../database');

class Cities {
  static retrieveAll (callback) {//get
    db.query('SELECT tegreso_desc from tipo_egreso', (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

  /*static insert (city, callback) {//post
    db.query('INSERT INTO cities (city_name) VALUES ($1)', [city], (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }*/
}

module.exports = Cities;
const db = require('../database');

class Cities {
  static retrieveAll (callback) {//get
    //db.query('SELECT tegreso_desc from tipo_egreso', (err, res) => {
    //db.query('SELECT tunidad_desc from tipo_unidad', (err, res) => {
      db.query('SELECT tipotelefono_desc from tipo_telefono', (err, res) => {
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
const db = require('../db')

getIngrid = async(req,res) => {
    db.con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT nama, price_unit FROM bahan", function (err, res, fields) {
          if (err) throw err;
          console.log(res);
        });
      });
}

module.exports = {
    getIngrid
}
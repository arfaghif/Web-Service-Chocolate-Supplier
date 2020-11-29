const {con} = require('../db/index')

exports.getIngrid = async(req,res) => {
    get_info((result)=>{
      res.json(result);
    })
}
function get_info(callback){
      
  con.query("SELECT * FROM bahan", function (err, res) {
      if (err){
          throw err;
      }
      console.log(res);
      return callback(res);
  })
}


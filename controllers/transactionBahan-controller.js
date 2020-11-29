const express = require('express');
const {con} = require('../db/index');

exports.transactionPost =  async (req,res)=>{
    dataBody = req.body;
    nambahan = dataBody.nambahan;
    nambahan = dataBody.nambahan;
    amount = dataBody.amount;
    saldo = dataBody.saldo; //kalo API Java Bisa diganti fetch
    console.log(nambahan,amount,saldo);
    get_info(nambahan, (result)=>{
        if(saldo>result*amount){
            res.json({status: 'Pembelian Berhasil'});
            res.status(200);
        }else{
            res.json({status: 'Pembelian Gagal'});
            res.status(404);
        }
    })
    
}
function get_info(nambahan, callback){
      
    con.query("SELECT price_unit FROM bahan WHERE nama = ?",[nambahan], function (err, res) {
        if (err){
            throw err;
        }
        console.log('ini harga function ', res[0].price_unit);
        return callback(res[0].price_unit);
    })
}
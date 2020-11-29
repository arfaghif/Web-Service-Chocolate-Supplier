const express = require('express')
const ctrl = require('../controllers/ctrl')
const suppCtrl = require("../controllers/ctrl")
const router = express.Router()

//router.get('/movies', MovieCtrl.getMovies)

module.exports = router.get('/ingrid', ctrl.getIngrid)
const express = require('express');
const router = express.Router();
const {transactionPost} = require('../controllers/transactionBahan-controller');

router.post('/beli',transactionPost);
module.exports = router;
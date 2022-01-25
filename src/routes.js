const express = require('express');
const router = express.Router();
const CondutoresController = require('./controllers/condutoresController')

router.get ("/", (req, res) => {
    res.json ("Bem-vindo ao Rentacar Online: powered by Emanuel");
  });

router.get('/condutores/:bi',CondutoresController.index);
module.exports = router; 
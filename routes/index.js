const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', {title: 'SparkTenis'});
});

router.get('/torneos', (req, res) =>{
    res.render('torneos.html', {title: 'Torneos'});
});

router.get('/contacto', (req, res) =>{
    res.render('contacto.html', {title: 'Contacto'});
})

router.get('/inicio', (req, res) =>{
    res.render('inicio.html', {title: 'SparkTenis'});
})



module.exports = router;

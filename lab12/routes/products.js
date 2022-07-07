const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router({
    "caseSensitive": false,
    "strict": false
});

//edit product detail
router.post('/edit/:id', (req, res, next) => {
    console.log(req.params.id);
    res.redirect('/product');
});

//product detail
router.get('/:id', (req, res, next) => {
    let html = fs.readFileSync(path.join(__dirname, '..', 'views', 'products', 'detail.html'), 'utf8');
    html = html.replaceAll('{id}', req.params.id);
    res.send(html);
});

//list of product
router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'products', 'list.html'));
});

module.exports = router;
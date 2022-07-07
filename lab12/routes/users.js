const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router({
    "caseSensitive": false,
    "strict": false
});

//edit user detail
router.post('/edit/:id', (req, res, next) => {
    console.log(req.params.id);
    res.redirect('/user');
});

//user detail
router.get('/:id', (req, res, next) => {
    let html = fs.readFileSync(path.join(__dirname, '..', 'views', 'users', 'detail.html'), 'utf8');
    html = html.replaceAll('{id}', req.params.id);
    res.send(html);
});

//list of users
router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'users', 'list.html'));
});

module.exports = router;
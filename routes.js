const express = require("express");
const router = express.Router();
const path = require("path");

router.use('/', express.static(path.join(__dirname, '/views')));

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

router.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});

module.exports = router;
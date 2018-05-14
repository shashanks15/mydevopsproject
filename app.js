const express = require("express");
const app = express();
const router = express.Router();

app.use(express.static(__dirname + '/'));
router.get('/', (req, res) => {
    res.send('./index.html');
});

app.listen(8080, (req, res) => {
    console.log('server is listening on 8080...');
});
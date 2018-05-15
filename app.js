const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routes");

app.use('/', routes);

app.listen(8080, (req, res) => {
    console.log('server is listening on 8080...');
});
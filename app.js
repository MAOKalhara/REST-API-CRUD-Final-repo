const express = require('express');
const app = express();

const PostRoutes = require('./api/Routes/product');

app.use('/product',PostRoutes);

module.exports = app;
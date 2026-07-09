const express = require('express');
const cors = require('cors');

const artisansRoutes = require('./src/routes/artisans');
const categoriesRoutes = require('./src/routes/categories');
const contactRoutes = require('./src/routes/contact');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/artisans', artisansRoutes);
app.use('/categories', categoriesRoutes);
app.use('/contact', contactRoutes);



module.exports = app;
const express = require('express');
const cors = require('cors');

const helmet = require('helmet')
const apiKey = require('./src/middlewares/apiKey')

const artisansRoutes = require('./src/routes/artisans');
const categoriesRoutes = require('./src/routes/categories');
const contactRoutes = require('./src/routes/contact');

const app = express();

app.use(helmet());
app.use(cors({
    origin: process.env.SITE_URL || 'http://localhost:5173'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(apiKey);



app.use('/artisans', artisansRoutes);
app.use('/categories', categoriesRoutes);
app.use('/contact', contactRoutes);



module.exports = app;
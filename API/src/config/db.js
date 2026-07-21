require ('dotenv').config()
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, 
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        logging: false,

        ...(process.env.DB_CA_CERT && {
            dialectOptions: {
                ssl: {
                    rejectUnauthorized: true,
                    ca: process.env.DB_CA_CERT
                }
            }
        })
    }
);

module.exports = sequelize;

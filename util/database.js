const {Sequelize} = require('sequelize');


const sequelize = new Sequelize({
    host:localhost,
    username:postgres,
    password: root,
    port: 5432,
    database: repair, // example
    dialect: 'postgres',
    logging: false
});

module.exports = {sequelize};
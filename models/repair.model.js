const {DataTypes} = require('sequelize');
const {sequelize} = require('../util/database');


const Repairs = sequelize.define('repair',{
    id:{
        primaryKey:true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    date: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING(10),
        allowNull: false,
        defaultValue: 'active',
    },
    userid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = {Repairs};
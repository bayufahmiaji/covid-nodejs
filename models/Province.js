const Sequelize = require('sequelize');

const sequelize = require('../common/sequelize');

class Province extends Sequelize.Model {}

Province.init({
    name: Sequelize.STRING,
    confirmed: Sequelize.INTEGER,
    recovered: Sequelize.INTEGER,
    deaths: Sequelize.INTEGER,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
}, {sequelize, modelName: "province"});

sequelize.sync();

module.exports = Province;
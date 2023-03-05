const {sequelize} = require('../db');
const { Sequelize } = require('sequelize');

let Item = sequelize.define('item', {
 name: Sequelize.STRING,
 image: Sequelize.STRING,
 price: Sequelize.INTEGER,
 vegetarian: Sequelize.BOOLEAN

})

module.exports = {
    Item
};
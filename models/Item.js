const {sequelize} = require('../db');
const { Sequelize } = require('sequelize');

let Item = new sequelize.define('item', {
 name: Sequelize.STRING,
 image: Sequelize.STRING,
 price: Sequelize.INTEGER,
 vegetarian: Sequelize.BOOLEAN

})

module.exports = {
    Item
};
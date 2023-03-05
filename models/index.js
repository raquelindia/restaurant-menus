const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu')
const {Item} = require('./Item.js')

Restaurant.hasMany(Menu);
Menu.hasMany(Item);

module.exports = { Restaurant, Menu, Item}

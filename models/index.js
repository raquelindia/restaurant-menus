const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu')
const {Item} = require('./Item.js')

Restaurant.hasMany(Menu);
Menu.hasOne(Restaurant);

Menu.hasMany(Item);
Item.belongsTo(Menu);

module.exports = { Restaurant, Menu, Item}

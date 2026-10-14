'use strict';
 
const hash = {
  'Volodymyr Zelenskyy': '+380673336767',
  'Kirillov Budanov': '+380987582948',
  'Mihail Drapatiy': '+380978082956',
};
 
const findPhoneByName = (name) => hash[name];
 
module.exports = { findPhoneByName };

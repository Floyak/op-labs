'use strict';
 
const phoneBook = [
  { name: 'Volodymyr Zelenskyy', phone: '+380673336767' },
  { name: 'Kirillov Budanov', phone: '+380987582948' },
  { name: 'Mihail Drapatiy', phone: '+380978082956' },
];
 
const findPhoneByName = (name) => {
  for (const record of phoneBook) {
    if (record.name === name) return record.phone;
  }
  return undefined;
};
 
module.exports = { findPhoneByName };

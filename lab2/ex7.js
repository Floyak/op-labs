'use strict';
 
const fn = () => {
  const obj1 = { name: 'Marcus' };
  let obj2 = { name: 'Marcus' };

  obj1.name = 'Lucius';
  obj2.name = 'Lucius';
  obj2 = { name: 'Julius' };

  return { obj1, obj2 };
};
 
module.exports = { fn };

'use strict';
 
const ipToInt = (ip = '127.0.0.1') =>
  ip
    .split('.')
    .map(Number)
    .reduce((acc, byte) => (acc << 8) + byte, 0);
 
module.exports = { ipToInt };

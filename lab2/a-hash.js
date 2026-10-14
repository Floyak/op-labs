'use strict';

/* 10. Implement phone book using hash (also known as `object`).
- Define hash with `key` contains `name` (from previous example) and `value`
contains `phone`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from hash/object.
Use `hash[key]` to find needed phone. */

const phonebook = {
  Ukraine: '+380678903454',
  Zelenskyy: '+380981454960',
  Peremoga: '+380986785467'
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };

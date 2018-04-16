// var object = {
//   10: 'a',
//   age: '20',
//   20: {
//     nuber1: 'jkuw',
//     class: 'class4',
//     number2: 'jack',
//     7: 'number',
//     2: 'haha',
//     acount: '400'
//   },
//   LN:'里宁',
//   7: 'c',
//   sex: 'male',
//   name: 'jkwu',
//   group: {
//     name: '永恒',
//     column: 1,
//     member: '50',
//     7: 'number',
//     2: 'haha'
//       // [
//       // { name: 'john', gender: 'female' },
//       // { name: 'john', gender: 'female' },
//       // { name: 'john', gender: 'female' },
//       // ]
//   }
// };
var object = {
  10: 'a',
  age: '20',
  20: {
    nuber1: 'jkuw',
    class: 'class4',
    number2: 'jack',
    7: 'number',
    2: 'haha',
    acount: {
      nuber1: 'jkuw',
      class: 'class4',
      number2: 'jack',
      7: 'number',
      2: 'haha',
      acount: {
        nuber1: 'jkuw',
        class: 'class4',
        number2: 'jack',
        7: 'number',
        2: 'haha',
        acount: {
          nuber1: 'jkuw',
          class: 'class4',
          number2: 'jack',
          7: 'number',
          2: 'haha',
          acount: {
            nuber1: 'jkuw',
            class: 'class4',
            number2: 'jack',
            7: 'number',
            2: 'haha',
            acount: '400'
          }
        }
      }
    }
  },
  LN:'里宁',
  7: 'c',
  sex: 'male',
  name: 'jkwu',
  group: {
    name: '永恒',
    column: 1,
    member: '50',
    7: 'number',
    2: 'haha',
  }
};
var sortObjectKeys = require('../index');
var sortedObject = sortObjectKeys(object);
console.log(sortedObject);
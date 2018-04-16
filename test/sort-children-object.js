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
var fs = require('fs');
var sortedObject = sortObjectKeys(object);

// 同步保存json文件
function saveFileSync(jsonObj, filePath) {
  try {
    const data = JSON.stringify(jsonObj, null, 2);
    fs.writeFileSync(filePath, data);
  } catch (err) {
    log('文件保存失败:' + err);
    throw err;
  }
}

saveFileSync(sortedObject, 'sortedObjectResult.json');
console.log(sortedObject);
/**
 * Created by Administrator on 2017/11/13.
 */
// var object = { 10: 'a', age: '20', 20: 'b', LN:'里宁',
//   7: 'c', name: 'jkwu', sex: 'male', 3000: 'big number' };
// var sortObjectKeys = require('../index');
// var sortedObject = sortObjectKeys(object);
// console.log(sortedObject);

// var object = { 10: 'a', age: '20', 20: 'b', LN:'里宁',
//     7: 'c', name: 'jkwu', sex: 'male', 3000: 'big number' };
// var sortObjectKeys = require('../index');
// function sortNumber(a,b)
// {
//     return a-b;
// }
// var sortedObject = sortObjectKeys(object, sortNumber);
// console.log(sortedObject);

var object = { 10: 'a', 20: 'b', 7: 'c', 3000: 'big number', name: 'jkwu', gender: 'male' };
function sortNumber(a,b)
{
    return b-a;
}
var sortObjectKeys = require('../index');
var sortedObject = sortObjectKeys(object,sortNumber);
console.log(JSON.stringify(sortedObject));
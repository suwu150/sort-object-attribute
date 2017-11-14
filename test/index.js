/**
 * Created by Administrator on 2017/11/13.
 */
var object = { 10: 'a', age: '20', 20: 'b', LN:'里宁', 7: 'c', name: 'jkwu', sex: 'male' };
var sortObjectKeys = require('../index');
function sortNumber(a,b)
{
    return a-b;
    // return b-a;
}
var sortedObject = sortObjectKeys(object, sortNumber);
console.log(sortedObject);
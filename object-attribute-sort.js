/*
 * @author jkwu
 * @email suwu150@163.com
 *
 */
var sortedKeysFun = require('./libs/sorted-keys');
var isObject = require('./libs/isObject');
var isArray = require('./libs/isArray');

function objectAttributeSort(data, func) {
  // null is an object in javascript, Exclude null
  var obj = (data !== null && typeof data === 'object') ? data : undefined;
  if (!obj) {
    console.log('the input data is not an object');
    return;
  }
  /*
  * get object keys and sort keys
  * */
  var sortedKeys = sortedKeysFun(obj, func);
  /*
  * constructor new object
  * */
  var newObject = {};
  sortedKeys.map(function(item) {
    if (obj[item] && isObject(obj[item])) {
      newObject[item] = objectAttributeSort(obj[item], func);
    } else {
      newObject[item] = obj[item];
    }
  });
  return newObject;
}

module.exports = objectAttributeSort;
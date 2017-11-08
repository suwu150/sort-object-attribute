/*
 * @author jkwu
 * @email suwu150@163.com
 *
 */

function objectAttributeSort(data) {
  // null is an object in javascript, Exclude null
  var obj = (data !== null && typeof data === 'object') ? data : undefined;
  if (!obj) {
    console.log('the input data is not an object');
    return;
  }
  /*
  * get object keys
  * */
  var objectKeys = Object.keys(obj);

  /*
  * sort keys
  * */

  var sortedKeys = objectKeys.sort();
  /*
  * constructor new object
  * */
  var newObject = {};
  sortedKeys.map(function(item) {
    newObject[item] = obj[item];
  });
  return newObject;
}

module.exports = objectAttributeSort;
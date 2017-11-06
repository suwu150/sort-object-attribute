/**
 * Created by Administrator on 2017/11/6.
 */
var object = {name: 'jkwu', age: 20, sex: 'male', nbme: 'lise'};
var newKey = Object.keys(object);
console.log(newKey);
console.log(newKey.sort());
function objectKeySort() {
    var sortedKeys = newKey.sort();
    // for (var i = 0 ;i < sortedKeys.length; i++) {
    //
    // }
    var newObject = {};
    sortedKeys.map( function(item, index) {
        newObject[item] = object[item];
    });
    console.log(newObject);
}

objectKeySort();
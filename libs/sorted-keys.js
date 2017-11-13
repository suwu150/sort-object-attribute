/**
 * Created by Administrator on 2017/11/13.
 */
var objectKeys = require('./object-keys');
function sortedKeys(obj, fun) {
    if (typeof fun === 'function') {
        console.log(fun);
        console.log(objectKeys(obj));
        return objectKeys(obj).sort(fun);
    }
    return objectKeys(obj).sort();
}

module.exports = sortedKeys;
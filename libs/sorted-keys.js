/**
 * Created by Administrator on 2017/11/13.
 */
var objectKeys = require('./object-keys');
var isArray = require('./isArray');

function sortedKeys(obj, fun) {
    if (typeof fun === 'function' && typeof obj === 'object') {
        var keys = objectKeys(obj);
        var numberKeys = [];
        var stringKeys = [];
        keys && isArray(keys) && keys.map(function (key, index) {
            if (!isNaN(key)) {
                numberKeys.push(key);
            } else {
                stringKeys.push(key);
            }
        });
        numberKeys.sort(fun);
        stringKeys.sort(fun);
        return numberKeys.concat(stringKeys);
    } else {
        return objectKeys(obj).sort();
    }
}

module.exports = sortedKeys;
/**
 * Created by jkwu on 17-11-17.
 */
function isArray(o){
    return Object.prototype.toString.call(o)=='[object Array]';
}

module.exports = isArray;
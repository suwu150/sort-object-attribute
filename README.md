# sort-object-attribute
如何对一个对象的属性进行排序，在项目开发中，前后端需要通过特定的json文件进行数据的共享，但是在使用git工具查看的时候，对于顺序变动较大的对象将会很难区分出改动，有了这个对对象属性排序的功能之后，我们就可以进行对前后端json进行相同规则的排序，尽可能减少属性顺序的改变

1. issues
###### 当键值为数字的时候,按照数字排列在前面,字母排列在后面的规则进行排列
当全部是数字的时候,数字将会按照从小到大的顺序排列,当全部是字母的时候,顺序将会是字母的顺序进行排列

```
//具有随机键排序的数组类对象
// var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
// console.log(Object.keys(an_obj)); // console: ['2', '7', '100']

var an_obj = { 100: 'a', 2: 'b', 7: 'c', a: 4, b: 'y', v: 'nfg', f: '100' };
console.log(an_obj[100]);
console.log(Object.keys(an_obj)); // console: ['2', '7', '100']
```

###### null在js中属于对象,这一点应该注意处理
[参考文档](http://blog.csdn.net/sinat_17775997/article/details/52297012)
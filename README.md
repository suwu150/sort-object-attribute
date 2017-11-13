## sort-object-attribute
&nbsp;&nbsp;如何对一个对象的属性进行排序，在项目开发中，前后端需要通过特定的json文件进行数据的共享，但是在使用git工具查看的时候，对于顺序变动较大的对象将会很难区分出改动，有了这个对对象属性排序的功能之后，我们就可以进行对前后端json进行相同规则的排序，尽可能减少属性顺序的改变
## 1.安装
```
npm i sort-object-attribute --save-dev
```
## 2.使用
 如下代码，sortedObject就是排序之后的对象，在默认排序中使用按照字母顺序进行排序

```
var object = {name: 'jkwu', age: '20', sex: 'male'};
var sortObjectKeys = require('sort-object-attribute');
var sortedObject = sortObjectKeys(object);
```
在上面代码中最终输出结果如下所示：
```
{ age: '20', name: 'jkwu', sex: 'male' }
```
如果键中包含数字,则会按照数字在前,字母在后的排列顺序进行排列.如下面所示代码:
```
var an_obj = { 10: 'a', age: '20', 20: 'b', 7: 'c', name: 'jkwu', sex: 'male' };

```
结果如下所示:
 ```
 { '7': 'c', '10': 'a', '20': 'b', age: '20', name: 'jkwu', sex: 'male' }
 ```

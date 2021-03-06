## sort-object-attribute
如何对一个对象的属性进行排序，在项目开发中，前后端需要通过特定的json文件进行数据的共享，但是在使用git工具查看的时候，对于顺序变动较大的对象将会很难区分出改动，有了这个对对象属性排序的功能之后，我们就可以进行对前后端json进行相同规则的排序，尽可能减少属性顺序的改变


地址：[https://github.com/suwu150/sort-object-attribute](https://github.com/suwu150/sort-object-attribute)
## 1.安装
```$xslt
npm install sort-object-attribute --save
```
## 2.使用
#### 1）.普通遍历排序
 如下代码，sortedObject就是排序之后的对象，在默认排序中使用按照js中属性遍历的序列规则进行排序，
 `
 首先遍历所有属性名为数值的属性，按照数字排序     
 其次遍历所有属性名为字符串的属性，按照首字母的排列顺序进行排列。   注意：而非js中的生成顺序
 `

```$xslt
var object = {name: 'jkwu', age: '20', sex: 'male'};
var sortObjectKeys = require('sort-object-attribute');
var sortedObject = sortObjectKeys(object);
```
在上面代码中最终输出结果如下所示：
```$xslt
{ age: '20', name: 'jkwu', sex: 'male' }
```
如果键中包含数字,则会按照数字在前,字母在后的排列顺序进行排列.如下面所示代码:
```$xslt
var an_obj = { 10: 'a', age: '20', 20: 'b', 7: 'c', sex: 'male', name: 'jkwu' };

```
结果如下所示:
 ```$xslt
 { '7': 'c', '10': 'a', '20': 'b', age: '20', name: 'jkwu', sex: 'male' }
 ```
 如上结果所示：先取数字排序，然后再按照字母顺序排序

#### 2）.对象内包含对象的遍历排序

  如下代码，sortedObject就是排序之后的对象，在默认排序中使用按照js中属性遍历的序列规则进行排序，

 ```$xslt
var object = {
  10: 'a',
  age: '20',
  20: {
    nuber1: 'jkuw',
    class: 'class4',
    number2: 'jack',
    7: 'number',
    2: 'haha',
    acount: '400'
  },
  LN:'里宁',
  7: 'c',
  sex: 'male',
  name: 'jkwu',
  group: {
    name: '永恒',
    column: 1,
    member: '50',
    7: 'number',
    2: 'haha'
  }
};
 var sortObjectKeys = require('sort-object-attribute');
 var sortedObject = sortObjectKeys(object);
 ```
 在上面代码中最终输出结果如下所示：
 ```$xslt
{ '7': 'c',
  '10': 'a',
  '20':
   { '2': 'haha',
     '7': 'number',
     acount: '400',
     class: 'class4',
     nuber1: 'jkuw',
     number2: 'jack'
   },
  LN: '里宁',
  age: '20',
  group: { '2': 'haha', '7': 'number', column: 1, member: '50', name: '永恒' },
  name: 'jkwu',
  sex: 'male' }


 ```
 如果键中包含数字,则会按照数字在前,字母在后的排列顺序进行排列.如果键位为数字的对象，对象内部也会进行排序，具体排序结果与 1）方法一致

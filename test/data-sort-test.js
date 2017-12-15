/**
 * Created by jkwu on 17-12-15.
 */
var menuData = [
  { sortCode: '00',	id: 'CustomerManager-noMenu'},
  { sortCode: '10',	id: 'CustomerManager'},
  {	sortCode: '10-10',id: 'EntCustomer'},
  {	sortCode: '10-20',id: 'AgentCredit'},
  {	sortCode: '10-30',id: 'ThirdParty'},
  {	sortCode: '20-10-20',id: 'ShowCase20-10-20'},
  {	sortCode: '20-10-20-30',id: 'ShowCase20-10-20-30'},
  {	sortCode: '20',id: 'ImportAgentCredit'},
  {	sortCode: '20-10',id: 'ShowCase20-10'}
];

function add (accumulator, currentValue) {
  return accumulator + currentValue;
}


menuData.sort(function (obj1, obj2) {
  if (typeof obj1 === 'object' && typeof obj2 === 'object') {
    const obj1Items = obj1.sortCode && obj1.sortCode.split('-');
    const obj2Items = obj2.sortCode && obj2.sortCode.split('-');
    return obj1Items[0] - obj2Items[0];
  } else {
    return null;
  }
});

// console.log(menuData);

// 实现按照层级为1进行分组
const menuMap = {};
menuData.map(function (item) {
   const obj1Items = item.sortCode && item.sortCode.split('-');
   if (obj1Items[0]) {
     menuMap[obj1Items[0]] = menuMap[obj1Items[0]] && menuMap[obj1Items[0]] + 1 || 1;
   }
});

var finalResult = [];
Object.keys(menuMap).sort().map(function(sortCodeItem) {
  var tempResult = [];
  menuData.map(function (item) {    //
    const obj1Items = item.sortCode && item.sortCode.split('-');
    // console.log(obj1Items[0] === sortCodeItem);
    if (sortCodeItem === obj1Items[0]) {
      tempResult.push(item);
    }
  });

  tempResult.sort(function (obj1, obj2) {
    if (typeof obj1 === 'object' && typeof obj2 === 'object') {
      const obj1Items = obj1.sortCode && obj1.sortCode.split('-');
      const obj2Items = obj2.sortCode && obj2.sortCode.split('-');
      const sum1Result = obj1Items.reduce(add);
      const sum2Result = obj2Items.reduce(add);
      return sum1Result - sum2Result;
    } else {
      return null;
    }
  }).map(function (tempItem) {
    finalResult.push(tempItem);
  });
});

console.log(finalResult);
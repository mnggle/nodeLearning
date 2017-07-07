var counter1 = require('./util/counter');
var counter2 = require('./util/counter');
var data = require('./util/data.json');


console.log(counter1.count()); //1
console.log(counter2.count()); //2
console.log(counter2.count()); //3
/* 可以看到，counter.js并没有因为被require了两次而初始化两次
    具体可以参考 深入浅出node 第26页 2.2.1 优先从缓存加载
*/

// var data2 = eval(data);
console.log(data.name)
console.log(data.url)
console.log(data.links[0].name)
;
(function(name, definition) {
    //检测上下文环境是否为AMD或CMD
    var hasDefine = typeof define === 'function',
        //检查上下文环境是否为Node
        hasExports = typeof module !== 'undefined' && module.exports;

    if (hasDefine) {
        //AMD环境或者CMD环境
        define(definition);
    } else if (hasExports) {
        //定义为普通Node模块
        module.exports = definition();
    } else {
        //将模块的执行结果挂在window变量中，在浏览器中this指向window对象
        this[name] = definition();
    }
}('hello', function() {
    var hello = function() {
        console.log('hello')
    };
    return hello;
}));
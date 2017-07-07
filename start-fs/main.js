var fs = require('fs');
fs.readFile('./test.js', function(err, file) {
    console.log('读取文件完成');
    console.log(err);
    console.log(file)
});
console.log('发起读取文件');
//和ajax一样，'发起读取文件'是在'读取文件完成'之前输出的。
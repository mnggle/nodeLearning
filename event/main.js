var $ = require('jquery');
console.log($.ajax)
$.ajax({
    'url': 'localhost:8080',
    'method': 'POST',
    'data': {},
    'success': function() {
        console.log('成功')
    }
});
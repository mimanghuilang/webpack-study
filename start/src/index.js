import _ from 'loadsh'
var foo = function foo() {
    var str = _.join(['hello','webpack']);
    console.log(str);
    return str
}
var haha = document.getElementById('haha');
haha.addEventListener('click',foo)
var foo = function foo() {
    console.log('foo')
    return 'foo'
}
var haha = document.getElementById('haha');
haha.addEventListener('click',foo)
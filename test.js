var test = require('tape');
var logic = require('./logic.js');

test('delete testing', function(t) {
  let array =[
    {id:0 , description:"sports",done:false },
    {id:1 , description:"wash",done:false},
  ];
  
  let actual = logic.deleteTodo(array, 0).length;
  let expected = array.length - 1;
  console.log("actual", actual);
  console.log("expected", expected);
  t.equal(actual, expected, "empty array"); 
  t.end();
});

test('addTodo a new todo item to model.todos Array ', function (t) {
    var expected = [{id:-3,description:'first todo'}]
  t.deepEqual(logic.addTodo(), "undefind","")
  t.deepEqual(logic.addTodo([],""), "todo is an object ")
  t.deepEqual(logic.addTodo([], {id:-3,description:'first todo'}), expected ,'Todo list item added.');
  
  t.end();
});

test('Example test', function(t) {
  t.pass();
  t.end();
});


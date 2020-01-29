var test = require('tape');
var logic = require('./logic');

test('addTodo a new todo item to model.todos Array ', function (t) {
   todos=[
  ]
  newTodo={id:-3,description:'first todo'};
  t.deepEqual(logic.addTodo(todos, newTodo), [{id:-3,description:'first todo'}], "Todo list item added.");
  t.deepEqual(logic.addTodo(todos, newTodo), [{id:3,description:'second todo'}], "Todo list item added.");
  t.end();
});
test('Example test', function(t) {
  t.pass();
  t.end();
});


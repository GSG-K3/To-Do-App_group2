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



// test('addTodo a new todo item to model.todos Array ', function (t) {
//   // const root = document.getElementById(idList);
//   // let li = document.createElement('li');
//   // li.id = 'task1';
//   // root.appendChild(li);
//   t.deepEqual(addTodo(todos, newTodo), [-3,'first todo'], "Todo list item added.");
//   t.end();
// });


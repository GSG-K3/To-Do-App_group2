// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
    { id: -1, description: 'third todo' },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var Submit = document.getElementById("Submit");
      var list =document.getElementById("idList");
    // for( let i=0 ;i<state.length-1 ; i++){
     
      console.log(typeof(liTodo));

      Submit.addEventListener('click', function(event) {
      
        var liTodo = document.createElement('li');
        var inputText =document.getElementsByTagName("input")[0].value;
      
       const span = document.createElement("span")
      span.innerHTML=inputText;
      let check = document.createElement('input');
      
        list.appendChild(liTodo);
        liTodo.appendChild(check);
         liTodo.appendChild(span);
         check.type= "checkbox";
         var deleteButtonNode = document.createElement('button');
       document.getElementById("myInput").value = "";
       deleteButtonNode.innerHTML = "delete";
       liTodo.appendChild(deleteButtonNode );


      deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      console.log ("jgkd")
      update(newState);
    });
      });
      
      
   
    
    // you will need to use addEventListener

    // add span holding description
    // this adds the delete button
    
    
    todoNode.appendChild(deleteButtonNode);
    // add markTodo button

    
    // add classes for css

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      event.preventDefault()
      // what is inside event.target?

      var description = '?'; // event.target ....

      // hint: todoFunctions.addTodo
      var newState = []; // ?? change this!
      update(newState);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
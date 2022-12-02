import React, { useState } from 'react';
import './App.css';
/*
Below array destructure syntax is equivalent to: 
const newTodoStateArr = useState("");
const newTodo = newTodoStateArr[0];
const setNewTodo = newTodoStateArr[1]
*/
function App() {
  const [newTodo, setNewTodo] = useState("");
  // set to empty array instead of null cuz you can't map
  const [todos, setTodos]= useState([]);


  // first thing you do when you start making a form, prevent default
  const handleNewTodoSubmit = (event) => {
    event.preventDefault();

    if (newTodo.length === 0){
      return;
    }
    const todoItem = {
      text: newTodo,
      complete: false
    }
    // whenever state is not a primitive need to pass in new array
    setTodos([...todos, todoItem]);
    setNewTodo("");

    
  };


  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i != delIdx;
    });
    setTodos(filteredTodos);
  }

  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo,i)=> {
      if (idx === i) {
        todo.complete = !todo.complete;

        //to avoid mutating the todo directly, do this:
        //const updatedTodo = {...todo, complete: !todo.complete};
        //return udatedTodo;
      }
      
      return todo;
    })
    setTodos(updatedTodos);
  }

  return (
    <div style={{textAlign: "center"}} >
      <form onSubmit = {(event) => { 
        handleNewTodoSubmit(event);}}>

{/* keeps track of when user types into the input */}
        <input onChange={(event) =>{ 
          setNewTodo(event.target.value);}} type='text' value={newTodo}/>
        <div>
          <button>Add</button>
        </div> 
      </form>
      {todos.map((todo, i) => {
        const todoClasses = ["bold", "italic"];
      
        if(todo.complete){
          todoClasses.push("line-through")
        }
       
       
        return (
          <div key={i}>
            <input onChange={(event) =>{ handleToggleComplete(i); }} checked={todo.complete} type="checkbox" />
            <span className={todoClasses.join(" ")}>{todo.text}</span>
            <button onClick = {(event) => {handleTodoDelete(i)}} style= {{marginLeft: "10px"}}>Delete</button>
          </div>
        );
        })}
    </div>
  );
}

export default App;

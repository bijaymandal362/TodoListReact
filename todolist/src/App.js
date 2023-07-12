import './App.css';
import React, { useState } from 'react';
import Todo from './component/todoInput';
import TodoList from './component/todoList';


function App() {
  const [listTodo, setListTodo] = useState([]);//listTodo is the state variable and setListTodo is the function that will update the state variable
  let addList = (inputData) => { //todo is the parameter 
    if(inputData.trim() === "")  return;//if the input box is not empty
    setListTodo([...listTodo, inputData]); //...listTodo (all previous data and new data will be added/updated) is the previous state and todo is the new state   
  }

  const clearList = () => {
    setListTodo([]); //it will remove all the data from the listTodo
  }

  const deleteItem = (key) => { 
  let newListTodo = [...listTodo];
  newListTodo.splice(key, 1); 
  setListTodo(newListTodo);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Todo addList={addList} clearList= {clearList}/>

        <h1>TODO LIST</h1>
        {listTodo.map((item, i) => {return (
        <TodoList key={i} item={item} index={i} deleteItem={deleteItem}/>)
        } )}
      </header>
    </div>
  );
}

export default App;

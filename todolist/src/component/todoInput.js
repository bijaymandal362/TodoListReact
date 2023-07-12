import React, { useState } from 'react'
import "../App.css"


const Todo = (props) => {

  const [inputData, setInputData] = useState(''); //inputData is the state variable and setInputData is the function that will update the state variable
  const handleClicked = (event) => {
    setInputData(event.target.value);
  }

  const addTodo = () => { 
        props.addList(inputData); //addList is the function that will update the state variable
        setInputData(''); //after adding the todo, the input box will be empty
  }


  return (
    <>
    <div>
      <h1>Todo App</h1>
    </div>
        <div className='input-container'>
             
                <input 
                    type='text' 
                    placeholder='Enter your TODO' 
                    className='input-box-todo'
                    value={inputData} //value is the state variable
                    onChange={handleClicked}
                    
                />
                <button className='add-btn' onClick={()=> addTodo()
                }>+</button>
                <br/>
                <button className='clear-btn' onClick={()=> props.clearList()}>Remove All</button>
        </div>
  
    </>
  )
}

export default Todo
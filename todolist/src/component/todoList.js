import React from 'react'
import "../App.css"


function TodoList(props) {
  return (
   <>
        <li className='list-item'> {props.item}
            <span className='icons' onClick={()=> {props.deleteItem(props.index)} }>
                <i className="fa-sharp fa-solid fa-trash icon-delete"></i></span>
        </li>
    </>
  )
}

export default TodoList
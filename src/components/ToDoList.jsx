import React, { useState } from 'react'

const ToDoList = (props) => {
    const [inputText,setInputText]=useState('');
  return (
    <div>
      <input placeholder='search' onChange={(e)=>setInputText(e.target.value)} value={inputText}></input>
      <button onClick={()=>{
        props.addList(inputText)
        setInputText('');
      }}>+</button>
      <h1>{inputText}</h1>
    </div>
  )
}

export default ToDoList;

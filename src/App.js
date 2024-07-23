import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList';
import { useState } from 'react';

function App() {
  const [toDoList,setToDoList]=useState([]);
  const addList=(inputText)=>{
    console.log('==>',inputText)
    }
  return (
    <div className="App">
    <ToDoList addList={addList}/>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import '../index.css';
import TodoList from './TodoList'
import uuid from 'react-uuid'

export default function Home(){

    const [task,setTask]=useState('');
    const [todoList,setTodoList]=useState([]);

    const changeValue=(event) =>{
        setTask(event.target.value)
    }

    const addTask= ()=>{
        const newTodo={
            id:uuid(),
            value: task, 
            completed:false
        }

        setTodoList([...todoList,newTodo])
        setTask('')
    }

    return (
        <div>
            <input type="text" className="textInput"  placeholder="Enter Task" value={task} onChange={changeValue}/>
            <button className="addbtn" onClick={addTask}>add task</button> 
            <TodoList todoList={todoList} setTodoList={setTodoList}/>
        </div>
    );
}
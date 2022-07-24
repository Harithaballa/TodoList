import '../index.css'
import doneImg from '../images/copy.png';
import deleteImg from '../images/delete.png';

export default function TodoList({todoList,setTodoList}){

    const markAsComplete=(todo)=>{
        setTodoList(todoList.map(task => {
            if(task.id===todo.id){
                task.completed=!todo.completed;
            }
            return task;
        }))
    }

    const deleteTodo=({id})=>{
        setTodoList(todoList.filter(task =>task.id!==id));  
    }

    return todoList && todoList.map((todo)=>{
        return(
            <div key={todo.id}>
                {todo.completed?<button type="button" className='todoCard complete'>{todo.value}</button>: 
                <button type="button" className='todoCard'>{todo.value}</button>}
                <img className='photo' src={doneImg} alt="not found" onClick={()=>markAsComplete(todo)}/>
                <span></span>
                <img className='photo' src={deleteImg} alt="not found" onClick={()=>deleteTodo(todo)}/>
            </div>
        )
    })
}
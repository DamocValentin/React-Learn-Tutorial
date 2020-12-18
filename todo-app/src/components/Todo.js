import React from 'react';

const Todo = ({currentTodo, setTodos, todos}) => {

    const deleteHandler = () =>{
        setTodos(todos.filter(el => el.id !== currentTodo.id))
    };

    const completeHandler = () =>{
        setTodos(todos.map(item =>{
            if(item.id === currentTodo.id){
                return{
                    ...item, completed: !item.completed
                };
            }
            return item;
        }))
    }

    return(
        <div className='todo'>
            <li className={`todo-item ${currentTodo.completed ? "completed" : ""}`}>{currentTodo.text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn" >
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;
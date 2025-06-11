import { useState } from 'react';
import TodoListForm from '../TodoListForm/TodoListForm';
import './todoList.css';
import TodoListBody from '../TodoListBody/TodoListBody';

const TodoList = () => {
    const [data, setData] = useState([]);

    return (
        <div className="todoList">
            <h1>Get Things Done!</h1>
            <TodoListForm 
                data={data}
                setData={setData}
            />
            <TodoListBody 
                data={data}
                setData={setData}
            />
        </div>
    )
}

export default TodoList;
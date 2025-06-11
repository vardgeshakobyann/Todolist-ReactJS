import { useState } from 'react';
import './todoListForm.css';

const TodoListForm = ({data, setData}) => {
    const [text, setText] = useState("");

    const submit = (e) => {
        e.preventDefault();

        if (text.trim() !== "") {
            const newTask = {
                id: new Date().getTime().toString(),
                task: text,
                isEditing: false,
                isComplete: false
            }

            setData([...data, newTask]);
        }

        setText("");
    }

    return (
        <form onSubmit={submit}>
            <input
                type="text"
                placeholder="What is the task today?"
                onChange={(e) => {
                    setText(e.target.value);
                }}
                value={text}
            />
            <button>Add Task</button>
        </form>
    )
}

export default TodoListForm;
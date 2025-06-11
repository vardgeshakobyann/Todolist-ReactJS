import { useState } from 'react';
import './editInput.css';

const EditInput = ({ data, setData, index, task }) => {
    const [changeTask, setChangeTask] = useState(task);

    const chnageTaskSubmit = (e) => {
        e.preventDefault();
        data[index].task = changeTask.trim();
        data[index].isEditing = false;
        setData([...data]);
    }

    return (
        <form className="editForm" onSubmit={chnageTaskSubmit}>
            <input
                type="text"
                placeholder="change Task..."
                value={changeTask}
                onChange={e => setChangeTask(e.target.value)}
            />
            <button>Save</button>
        </form>
    )
}

export default EditInput;
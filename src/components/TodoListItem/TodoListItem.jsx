import EditInput from '../EditInput/EditInput';
import './todoListItem.css';

const TodoListItem = ({task, deleteItem, data, setData, index, editTask, elem}) => {
    return (
        <div className="todoListItem">
            {
                elem.isEditing
                ?
                <EditInput
                    data={data}
                    setData={setData}
                    index={index}
                    task={task}
                />
                :
                <>
                    <p>{task}</p>
                    <ul className="btns">
                        <li>
                            <i className="fa-solid fa-pen-to-square" onClick={editTask}></i>
                        </li>
                        <li>
                            <i className="fa-solid fa-trash" onClick={deleteItem}></i>
                        </li>
                    </ul>
                </>
            }
        </div>
    )
}

export default TodoListItem;
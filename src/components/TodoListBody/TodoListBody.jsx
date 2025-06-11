import TodoListItem from '../TodoListItem/TodoListItem';
import './todoListBody.css';

const TodoListBody = ({data, setData}) => {

    const deleteItem = (id) => {
        let update = data.filter(el => el.id !== id);
        setData(update);
    }

    const editTask = (id) => {
        let update = data.map(el => ({...el, isEditing: el.id === id}));
        setData(update);
    }

    return (
        <div className="todoListBody">
            {
                data.map((item, index) => {
                    return (
                        <TodoListItem 
                            key={item.id}
                            task={item.task}
                            data={data}
                            index={index}
                            setData={setData}
                            deleteItem={() => deleteItem(item.id)}
                            editTask={() => editTask(item.id)}
                            elem={item}
                        />
                    )
                })
            }
        </div>
    )
}

export default TodoListBody;
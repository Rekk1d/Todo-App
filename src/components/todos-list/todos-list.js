import TodosItem from "../todos-item/todos-item";
import './todos-list.scss'

const TodosList = ({data, onDelete}) => {
    
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <TodosItem key={id} {...itemProps} onDelete={() => onDelete(id)}/>
        )
    })
    
    return (
        <ul className="todos-list">
            {elements}
        </ul>
    )
}
export default TodosList;
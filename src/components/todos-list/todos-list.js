import TodosItem from "../todos-item/todos-item";
import './todos-list.scss'

const TodosList = () => {
    return (
        <ul className="todos-list">
            <TodosItem/>
        </ul>
    )
}
export default TodosList;
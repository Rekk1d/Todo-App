import './todos-item.scss';
import trash from '../../resources/trash.svg';
const TodosItem = ({task, complete, onDelete}) => {

    let classNames = 'todo';
    if(complete) {
        classNames += ' complete'
    }
    return (
        
        <li className='todos-item'>
            <span className={classNames}>{task}</span>
            <img src={trash} alt="" className='img' onClick={onDelete}/>
        </li>     
    )
}
export default TodosItem;
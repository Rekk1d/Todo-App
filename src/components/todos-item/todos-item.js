import './todos-item.scss';
import trash from '../../resources/trash.svg';
import completed from '../../resources/complete.png'
const TodosItem = ({task, complete, onDelete, onToggleComplete}) => {

    let classNames = 'todo';
    if(complete) {
        classNames += ' complete'
    }
    return (
        
        <li className='todos-item'>
            <span className={classNames}>{task}</span>
            <div>
                <img src={completed} alt="completed" className='img' onClick={onToggleComplete} data-toggle="complete"/>
                <img src={trash} alt="" className='img' onClick={onDelete}/>
            </div>
        </li>     
    )
}
export default TodosItem;
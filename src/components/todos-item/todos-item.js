import './todos-item.scss';
import trash from '../../resources/trash.svg';
const TodosItem = () => {
    return (
       <>
            <li className='todos-item'>
                <span className='todo'>Погулять </span>
                <img src={trash} alt="" className='img'/>
           
            </li>
            
        
       </>
        
    )
}
export default TodosItem;
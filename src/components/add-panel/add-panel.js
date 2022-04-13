import { Component } from 'react';
import './add-panel.scss'
class AddPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            task: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
        return(
        
            <div className='add-form'>
                <input type="text" className='add-input' onChange={this.onValueChange} name="task" value={this.state.task}/>
                <button className="add-btn">Добавить</button>
            </div>
           
        )
    }
}
export default AddPanel;
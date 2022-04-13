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
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.task.length < 3) return;
        this.props.addTask(this.state.task);
        this.setState({
            task: ''
        })
    }
    render() {
        return(
        
            <div className='add-form'>
                <form onSubmit={this.onSubmit}>
                    <input type="text" className='add-input' onChange={this.onValueChange} name="task" value={this.state.task}/>
                    <button className="add-btn" type="submit">Добавить</button>
                </form>
            </div>
           
        )
    }
}
export default AddPanel;
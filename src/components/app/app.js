import { Component } from 'react';
import AppInfo from '../app-info/app-info'
import AddPanel from '../add-panel/add-panel'
import TodosItem from '../todos-item/todos-item';
import TodosList from '../todos-list/todos-list';
import '../style/style.scss'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {task: 'Погулять', complete: false, id: 1},
                {task: 'Погулять с собакой', complete: true, id: 2},
                {task: 'Погулять с Дашей', complete: false, id: 3},
            ]
        }
    
    }
    deleteTask = (id) => {
        this.setState(({data}) => {
            const i = data.findIndex(elem => elem.id === id)
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }
    render() {
        return (
            <div className="app">
                <AppInfo/>
                <div className="add-panel">
                    <AddPanel/>
                </div>
                <TodosList 
                    data={this.state.data}
                    onDelete={this.deleteTask}
                />
            </div>
        )
    }
    
}
export default App;
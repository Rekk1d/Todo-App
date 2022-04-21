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
                {task: 'Погулять с собакой', complete: false, id: 2},
                {task: 'Погулять с Дашей', complete: false, id: 3},
            ]
           
        }
        this.maxId = 4;
    
    }
    
    addTask = (task) => {
        const newItem = {
            task,
            complete: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }
    
    deleteTask = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    onToggleComplete = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, complete: !item.complete}
                }
                return item
            })    
        }))
    }
    render() {
        const todos = this.state.data.length;
        const completed = this.state.data.filter(item => item.complete).length
        const notCompleted = this.state.data.filter(item => !item.complete).length
        return (
            <div className="app">
                <AppInfo 
                todos={todos}
                completed={completed}
                notCompleted={notCompleted}
                />
                <div className="add-panel">
                    <AddPanel addTask={this.addTask}/>
                </div>
                <TodosList 
                    data={this.state.data}
                    onDelete={this.deleteTask}
                    onToggleComplete={this.onToggleComplete}
                />
            </div>
        )
    }
    
}
export default App;
import { Component } from 'react';
import AppInfo from '../app-info/app-info'
import AddPanel from '../add-panel/add-panel'
import TodosItem from '../todos-item/todos-item';
import TodosList from '../todos-list/todos-list';
import '../style/style.scss'

class App extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="app">
                <AppInfo/>
                <div className="add-panel">
                    <AddPanel/>
                </div>
                <TodosList/>
            </div>
        )
    }
}
export default App;
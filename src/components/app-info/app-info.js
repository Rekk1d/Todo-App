import './app-info.scss'

const AppInfo = ({todos, completed,notCompleted}) => {
    let date = new Date().toLocaleDateString();
    return (
        <div className="app-info">
            <h1>Задач на {date}: {todos} </h1>
            <h2>Сделано: {completed}</h2>
            <h2>Осталось: {notCompleted}</h2>
        </div>
    )
}

export default AppInfo;
import React, {useEffect, useState} from 'react';
import './css/myDetailRecipe.css';
import TodoItem from './components/TodoItem'
// import Countdown from './components/Timer'
// import TodoQueue from './components/TodoQueue'


function DetailRecipe(props) {

    const [todos, setTodo] = useState(JSON.parse(localStorage.getItem('tData')).instructions)
    // const [count, setCount] = useState(0)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const tData = JSON.parse(localStorage.getItem('tData'))
    //const instructions = tData.instructions.map((item, index) => [item, index, false])

    const toggleComplete = (key) => {
        setTodo(todos.map(todo => todo.key === key?
            {
                ...todo,
                completed: !todo.completed
            }
            : todo))
    }

    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return (
        <div className="myContainer">
            <div className="dPageTitle">
                <h1>{tData.label}</h1>
                <h4>Owner: {tData.source}</h4>
            </div>
            <div className="dPageImg-ingredients">
                <img className="dPageImage" src={tData.image} alt=""/>
                <div className="dPageIngredients">
                    <ul>
                        {tData.ingredients.map((list, index) => <li key={index}>{list}</li>)}
                    </ul>
                </div>
            </div>
            <div className="dPageInstructions">
                <div className="dPageInsText">
                    {todos.map(task =>
                        <div>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleComplete(task.key)}/>
                            <p className="CheckBoxText" style={task.completed ? completedStyle : null}>{task.key + 1}) {task.text}</p>
                        </div>
                    )}
                    {/* <input
                        value={value}
                        onChange={e => setValue(e.target.value)}/> */}
                </div>
                <div className ="dPageInsClock">
                    {/* <Countdown
                        time={tData.totalTime}/> */}
                    {/* <div>count: {count}</div>
                    <button onClick={() => setCount(count + 1)}>Press me</button> */}
                </div>
            </div>

        </div>
    )
}

export default DetailRecipe;
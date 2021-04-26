import React, { useEffect, useState } from 'react';
import '../../css/myDetailRecipe.css';

import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
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
    setTodo(todos.map(todo => todo.key === key ?
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
      <Container>
        <Row>
          <Col sm={8} className="dPageImage">
            <img src={tData.image} alt="" />
          </Col>
          <Col sm={4} className="dPageIngredients">
            <ul>
              {tData.ingredients.map((list, index) => <li key={index}>{list}</li>)}
            </ul>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col sm={8}>
            {todos.map(task =>
              <div className="myCheckBox">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.key)} />
                <p className="CheckBoxText" style={task.completed ? completedStyle : null}>{task.key + 1}) {task.text}</p>
              </div>
            )}
          </Col>
          <Col sm={4}>
            {/* <Countdown time={tData.totalTime}/> */}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default DetailRecipe;
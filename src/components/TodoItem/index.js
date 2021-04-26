import React from "react"

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  }

  const completed = props.retrieveItem('instructions').completed

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => props.handleChange(props.id)} />
      <p className="CheckBoxText" style={completed ? completedStyle : null}>{props.text}</p>
    </div>
  )
}

export default TodoItem
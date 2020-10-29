import React from 'react'
import TodoItem from "./TodoItem"

class TodoList extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            todos: this.props.instructions
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(key) {
        //console.log("changed", id)
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.key === key) {
                    todo.completed = !todo.completed
                    console.log(todo.completed)
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    render () {
        const todoItems = this.state.todos.map(task => <TodoItem
            id = {task.key}
            taskName = {task.text}
            completed = {task.completed}
            handleChange = {this.handleChange}/>)
        return (
            <div className="TodoList">
                {todoItems}
            </div>
        )
    }
}

export default TodoList
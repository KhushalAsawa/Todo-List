import React from "react"
//Import Components
import Todo from "./Todo"

const TodoList = (props) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {props.filteredTodos.map(todo => (
                    <Todo 
                        setTodos={props.setTodos} 
                        todos={props.todos} 
                        key={todo.id} 
                        todo={todo}
                        text={todo.text} 
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList
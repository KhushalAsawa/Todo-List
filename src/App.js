import React, {useState, useEffect} from "react"
import "./App.css"

//Importing Components
import Form from "./components/Form.js"
import TodoList from "./components/TodoList.js"


function App() {

    //States
    const [inputText, setInputText] = useState("") 
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all')
    const [filteredTodos, setFilteredTodos] = useState([])


    //Run once when the app start
    useEffect(() => {
        getLocalTodos()
    }, [])


    //use Effect when the state of todos and status changes
    useEffect(() => {
        filterHandler()
        saveLocalTodos()
    }, [todos, status])

    //Functions
    const filterHandler = () => {
        switch(status){
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed === true))
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed === false))
                break;
            default:
                setFilteredTodos(todos)
                break;
        }
    }

    //Save to Local storage so that everytime we start our app we get our data back
    
    // JSON.stringify() => JavaScript object to JSON string
    //JSON.parse() =>parses JSON string and construct a JavaScript value or object

    const saveLocalTodos = () => {
            localStorage.setItem("todos", JSON.stringify(todos))
    }

    const getLocalTodos = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]))
        } else {
            let todoLocal = JSON.parse(localStorage.getItem("todos"))
            setTodos(todoLocal)
        }
    }


    return(
        <div className="App">
           <header>
               <h1>Khushal's Todo List</h1>
           </header>

           <Form 
                inputText = {inputText}
                setInputText={setInputText}
                todos = {todos}
                setTodos = {setTodos}
                setStatus = {setStatus}    
            />

            <TodoList 
                filteredTodos={filteredTodos}
                setTodos={setTodos} 
                todos={todos} 
            />

        </div>
    )
}

export default App
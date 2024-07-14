import './App.css'
import RemoveTodo from './removeTodo'
import AddTodo from './addTodo'
import TodoList from './TodoList'

function App() {

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList />
      <AddTodo />
      <RemoveTodo />
    </div>
  )
}

export default App

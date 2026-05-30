
import './App.css'
import { StudentForm } from './studentform/studentform'
import { TodoDisplay } from './todo/tododisplay'
import { TodoList } from './todo/todolist'

function App() {

  return (
    <>
     <TodoList />
     <TodoDisplay />
     {/* <StudentForm /> */}
    </>
  )
}

export default App

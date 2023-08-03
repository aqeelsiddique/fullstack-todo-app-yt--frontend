import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "./utils/HandleApi";


function App() {

  const [todo, settodo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [todoId, setdodoId] = useState("")

  useEffect(() => {
    getAllToDo(settodo)
  }, [])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setdodoId(_id)
  }

  return (
    <div className="App">

      <div className="container">

        <h1>Assingment Task </h1>

        <div className="top">
          <input
            type="text"
            placeholder="Add Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div
            className="add"
            onClick={isUpdating ?
              () => updateToDo(todoId, text, settodo, setText, setIsUpdating)
              : () => addToDo(text, setText, settodo)}>
            {isUpdating ? "Update" : "Add"}
          </div>

        </div>

        <div className="list">

          {todo.map((item) => <ToDo 
         
         
          key={item._id} 
          text={item.text}
          updateMode = {() => updateMode(item._id, item.text)}
          deleteToDo = {() => deleteToDo(item._id, settodo)} />)}

        </div>

      </div>

    </div>
  );
}

export default App;

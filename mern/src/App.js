import React,{useState} from "react";
import './App.css';
import CreateTask from './CreateTask';
import axios from "axios"
function App() {
  const [inputTask, setInputTask] = useState("")
  const [Tasks, setTasks] = useState([])
  
  
   function handleSubmit(e){
       e.preventDefault()
       peticion()
       setInputTask("")
   }
   function peticion(){
     axios.get("http://localhost:4000/api/task")
     .then(res=>setTasks(res.data))
   }
  return (
    <div className="App">
     <h1>STACK MERN</h1>
     <CreateTask
      inputTask={inputTask}
      setInputTask={setInputTask}
      handleSubmit={handleSubmit}
      Tasks={Tasks}/>
    </div>
  );
}

export default App;

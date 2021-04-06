import React,{useState} from "react";
import axios from "axios"
 const CreateTask = () => {
    const [inputTask, setInputTask] = useState("")

   function handleChange(e){
        setInputTask(e.target.value)
    }
    
    function handleSubmit(e){
        e.preventDefault()
        axios.get("http://localhost:4000/api/task")
        .then(res=>setInputTask(res.data))
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
         type="text"
         placeholder="create task" 
         onChange={handleChange}
         ></input>
        <input 
         type="submit"
        />
        <p>Tasks</p>
        <ul>
           <li> {
                
            }
            </li>
        </ul>
      </form>
    </div>
  );
};

export default CreateTask
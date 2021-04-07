import React,{useState} from "react";

 const CreateTask = ({setInputTask,handleSubmit,Tasks,inputTask}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
         type="text"
         value={inputTask}
         placeholder="create task" 
         onChange={e=>setInputTask(e.target.value)}
         ></input>
        <input 
         type="submit"
        />
        <p>Tasks</p>
        <ul>
        <p>{Tasks.map(tareas=><li>{tareas.title}</li>)}</p>
        </ul>
      </form>
    </div>
  );
};

export default CreateTask
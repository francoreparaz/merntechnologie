const { Router } = require("express");
const express = require("express")
const router = express.Router()
const Task = require("./Models");

router.get("/", async(req,res)=>{
    const task= await Task.find()
    res.json(task)
})

router.post("/", async(req,res)=>{
    const{ title, description} = req.body
    const task = new Task({
        title,
        description
    })
   await task.save()
    res.json({status: "tarea guardada"})
})

router.put("/:id" ,async(req,res)=>{
   const {title,description}=req.body
   const newTask= {title,description}
   await Task.findByIdAndUpdate(req.params.id, newTask)
   res.json({status:"task updated"})
})

router.delete("/:id", async(req,res)=>{
    const {title,description}=req.body
    const deleteTask={title, description}
    await Task.findByIdAndDelete(req.params.id,deleteTask )
    res.json({status:"Task deleted"})
})

module.exports = router
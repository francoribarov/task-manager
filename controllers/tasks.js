const Task = require('../models/tasks')

const getAllTasks = async (req,res) => {
    try{
        const task = await Task.find({})
        res.status(200).json({task})
    }catch (err){
        res.status(500).json({err})
    }
}

const createTask = async (req,res) => {
    try{
        const task = await Task.create(req.body)
        res.status(201).json(task)
    }catch (err){
        res.status(500).json({err})
    }
}

const getTask = async (req,res) => {
    try {
        const { id:taskId } = req.params
        const task = await Task.findOne({ _id:taskId })
        if (!task)
            return res.status(404).json('The task does not exist') 
        res.status(200).json({task}) 
    } catch (err) {
        return res.status(500).json({err}) 
    }
}

const updateTask = async (req,res) => {
    try {
        const { id: taskId } = req.params
        const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
            new: true,
            runValidators:true 
        })
        if (!task)
            return res.status(404).json('Did not found the task')
        res.status(200).json({ task })
    } catch (err) {
        return res.status(500).json({ err }) 
    }
}

const deleteTask = async (req,res) => {
    try {
        const { id: taskId } = req.params
        const task = await Task.findOneAndDelete({ _id: taskId })
        if (!task)
            return res.status(404).json('Did not found the task')
        res.status(200).json({ task })
    } catch (err) {
        return res.status(500).json({ err }) 
    }
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}
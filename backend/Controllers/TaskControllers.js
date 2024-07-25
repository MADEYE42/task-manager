const TaskModel = require("../Models/TaskModel");

const createTask = async (req,res)=>{
    const data = req.body;
    try {
        const model = new TaskModel(data);
        await model.save();
        res.status(201).json({
            message:'Task created successfully',
            success:true
        });
    } catch (error) {
        res.status(500).json({
            message:'Failed to create Task',
            success:false
        });
    };
}
const fetchAllTasks = async (req,res)=>{
    try {
        const data = await TaskModel.find({});
        res.status(200).json({
            message:'All Tasks',
            success:true,
            data
        });
    } catch (error) {
        res.status(500).json({
            message:'Failed to create Task',
            success:false
        });
    };
};
const updataTasks = async (req,res)=>{
    try {
        const id = req.params.id;
        const body = req.body;
        const obj = {$set:{...body}};
        await TaskModel.findByIdAndUpdate(id,obj)
        res.status(200).json({
            message:'Task Updated Successfully',
            success:true,
        });
    } catch (error) {
        res.status(500).json({
            message:'Failed to Update Task',
            success:false,
            error:`${error}`
        });
    };
};
const deleteTasks = async (req,res)=>{
    try {
        const id = req.params.id;
        
        await TaskModel.findByIdAndDelete(id)
        res.status(200).json({
            message:'Task Deleted Successfully',
            success:true,
        });
    } catch (error) {
        res.status(500).json({
            message:'Failed to Delete Task',
            success:false
        });
    };
};
module.exports={
    createTask,
    fetchAllTasks,
    updataTasks,
    deleteTasks
}
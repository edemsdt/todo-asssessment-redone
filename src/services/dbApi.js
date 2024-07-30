import mongoose from "mongoose";
import { Task } from "./model/Task";


export const dataBulk = async (req, res) => {
  try {
    const allTodos = await Task.find(); 
    res.json(allTodos);
  } catch (err) {
    res.status(500).send("Unable to get tasks");
  }
}

export const saveTask = async (req, res) => {
  const newData = await req.body;

  try {
    const dataSaved = await Task.create(newData);
    res.json(dataSaved);
  } catch (err) {
    res.status(500).send("Unable to save task")
  }
}

export const patchTask = async (req, res) => {
  const taskId = req.params.id;
  const checked = req.body;

  try {
    const patchData = await Task.findByIdAndUpdate(taskId, { $set: checked }, { new: true });
    res.json(patchData);
  } catch (err) {
    res.status(500).send("Unable to update task")
  }
}

export const deleteTask = async (req, res) => {
  const taskId = req.params.id;

  try {
    const deletedData = await Task.findByIdAndDelete(taskId);
    res.json(deletedData);
  } catch (err) {
    res.status(500).send("Unable to delete task")
  }
}
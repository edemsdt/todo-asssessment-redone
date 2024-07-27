import mongoose from "mongoose";
import { Todo } from "./model/Todo"

// const Todo = mongoose.model('Todo');

export const dataBulk = async (req, res) => {
  try {
    const allTodos = await Todo.find(); 
    res.json(allTodos);
  } catch (err) {
    res.status(500).send("Unable to get tasks");
  }
}
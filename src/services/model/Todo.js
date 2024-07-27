import mongoose, { Schema, model, Model } from 'mongoose';
// // import { MyTodo } from "../types/helperTypes"

const todoSchema = new Schema({
    task: {
        type: String,
        required: true
    }
})

export const Todo = model('Todo', todoSchema);
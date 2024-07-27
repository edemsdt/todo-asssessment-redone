import mongoose, { Schema, model, Model } from 'mongoose';
// // import { MyTodo } from "../types/helperTypes"

const taskSchema = new Schema({
    task: {
        type: String,
        required: true
    },
    checked: {
        type: Boolean,
        required: true
    }
})

// export const Task = model('Task', taskSchema);
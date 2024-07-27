// import raptorPubsub from "raptor-pubsub";
// import { navigate } from "marko-router5"
// import mongoose from 'mongoose';
// import { Task } from "../../services/model/Todo.js"
// const Todo = await mongoose.model('Todo');
// console.log(Todo.find())

export default class {
  onCreate() {
    this.state = {
      allData: []
    }
  }

  async onMount() {
    try {
      const data = await fetch('/api/tasks')
      this.state.allData = await data.json();
    } catch (err) {
      console.log(`Error fetching data: ${err}`)
    }
  }
  // goTo() {
  //   navigate('/addTask')
  // }
}
import { Router } from "express";
import indexPage from "./pages/index";
import newTaskPage from "./pages/newTask"
import { dataBulk, saveTask, patchTask, deleteTask } from "./services/dbApi";

export const router = Router()
  .get("/", indexPage)
  .get("/new-task", newTaskPage)
  .get("/api/tasks", dataBulk)
  .post("/save-task", saveTask)
  .patch("/patch-task/:id", patchTask)
  .delete("/delete-task/:id", deleteTask)

import { Router } from "express";
import indexPage from "./pages/index";
// import deleteReq from "./pages/delete-task"
import { dataBulk } from "./services/dbApi";

export const router = Router()
  .get("/", indexPage)
  .get("/api/tasks", dataBulk)
  // .get("/delete/:id", deleteReq)

import { addToDo ,getToDo,updateToDo,deleteToDo} from "../Controller/todocontroller.js";
import express from "express";
const route = express.Router();

route.post("/addtodo", addToDo);
route.get("/gettodo", getToDo);
route.put("/updatetodo", updateToDo);
route.delete("/deletetodo/:id", deleteToDo);


export default route;
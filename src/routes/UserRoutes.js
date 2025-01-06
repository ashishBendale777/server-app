import { addUser, deleteUser, getAllUsers, updateUser } from "../controllers/UserController.js";
import express from "express"

let userRoutes = express.Router()

userRoutes.get("/users", getAllUsers)

export { userRoutes }
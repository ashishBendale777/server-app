import express from "express"
import { userRoutes } from "./src/routes/UserRoutes.js"
import { connectToDatabase } from "./src/middleware/DbCooonnection.js"
import bodyParser from "body-parser"


//call the function
connectToDatabase()

let Server = express()

Server.use(bodyParser.json())

Server.get("/", (req, res) => {
    res.send("Hi guys...from swrver")
})


Server.use("/api", userRoutes)

Server.listen(5000, () => {
    console.log("Server Started");
})
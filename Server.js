import express from "express"
import { userRoutes } from "./src/routes/UserRoutes.js"


let Server = express()

Server.get("/", (req, res) => {
    res.send("Hi guys...from swrver")
})


Server.use("/api", userRoutes)

Server.listen(5000, () => {
    console.log("Server Started");
})
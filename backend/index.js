const express = require("express")
const { connection } = require("./Connection/connection")
require("dotenv").config()
const cors = require("cors")
const userRoute = require("./Routes/User.Route")
const todoRoute = require("./Routes/todo.Route")
const app = express()

app.use(cors())
app.use(express.json())

app.use("/user", userRoute)
app.use("/todo", todoRoute)


app.listen(process.env.Port, async () => {
    try {
        await connection
        console.log("Server is running")
    }
    catch (err) {
        console.log(err)
    }
})
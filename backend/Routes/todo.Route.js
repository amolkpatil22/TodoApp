const express = require("express")
const Auth = require("../Middlewares/Auth")
const todoModel = require("../Model/todoModel")

const todoRoute = express.Router()

todoRoute.use(Auth)

todoRoute.get("/all", async (req, res) => {
    try {
        let todos = await todoModel.find({ userID: req.body.userID })
        res.status(200).send({ "msg": "todos fetched", "status": "success", "todos": todos })
    }
    catch (err) {
        res.status(400).send({ "error": `${err}` })
    }
})

todoRoute.post("/add", async (req, res) => {
    try {
        let todo = todoModel(req.body)
        await todo.save()
        res.status(200).send({ "msg": "Task addedd successfully", "status": "success", "data": todo })
    }
    catch (err) {
        res.status(400).send({ "error": `${err}` })
    }
})

todoRoute.patch("/update/:id", async (req, res) => {
    try {
        let { id } = req.params
        let data = await todoModel.findOneAndUpdate({ _id: id, userID: req.body.userID }, req.body)
        if (data) {
            res.status(200).send({ "msg": "Task updated successfully", "status": "success", "todo": data })
        }
        else {
            res.status(200).send({ "msg": "Not Authorized", "status": "failed" })
        }
    }
    catch (err) {
        res.status(400).send({ "error": `${err}` })
    }
})


todoRoute.delete("/update/:id", async (req, res) => {
    try {
        let { id } = req.params
        let data = await todoModel.findOneAndDelete({ _id: id, userID: req.body.userID }, req.body)
        if (data) {
            res.status(200).send({ "msg": "Task Deleted successfully", "status": "success" })
        }
        else {
            res.status(200).send({ "msg": "Not Authorized", "status": "failed" })
        }
    }
    catch (err) {
        res.status(400).send({ "error": `${err}` })
    }
})

module.exports = todoRoute
const mongoose = require("mongoose")

const todoSchema = mongoose.Schema({
    userID: String,
    title: String,
    status: Boolean,
})


const todoModel = mongoose.model("todos", todoSchema)

module.exports = todoModel
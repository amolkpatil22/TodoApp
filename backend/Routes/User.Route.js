const express = require("express")
const userModel = require("../Model/userModel")
const bcrypt = require("bcrypt")
const userRoute = express.Router()
const jwt = require("jsonwebtoken")

userRoute.post("/add", async (req, res) => {
    try {
        bcrypt.hash(req.body.password, 10, async (err, hash) => {
            if (err) {
                res.status(200).send({ "msg": "err", "err": `${err}` })
            }
            else {
                let userdata = new userModel({ ...req.body, password: hash })
                await userdata.save()
                res.status(200).send({ "msg": "Uset Added Successfully", "status": "success" })
            }
        })
    }
    catch (err) {
        res.status(400).send({ "error": `${err}` })
    }
})

userRoute.post("/login", async (req, res) => {
    try {
        let userdata = await userModel.findOne({ email: req.body.email })
        if (userdata) {
            bcrypt.compare(userdata.password, req.body.password, (err) => {
                if (err) {
                    res.status(200).send({ "msg": "Invalid credentials", "status": "failed" })
                } else {
                    let token = jwt.sign({ userID: userdata._id }, "amol")
                    res.status(200).send({ "msg": "Logging Successfull", "status": "success", "token": `${token}` })
                }
            })
        }
        else {
            res.status(200).send({ "msg": "User not found", "status": "failed" })
        }
    }
    catch (err) {
        res.status(400).send({ "error": `${err}` })
    }
})

module.exports = userRoute
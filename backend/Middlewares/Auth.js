const express = require("express")
const jwt = require("jsonwebtoken")

const Auth = async (req, res, next) => {
    let token = req.headers?.authorization?.split(" ")[1]
    try {
        jwt.verify(token, "amol", (err, decoded) => {
            if (err) {
                res.status(200).send({ "msg": "Not Authorised", "status": "failed" })
            }
            else {
                let userID = decoded.userID
                req.body.userID = userID
                next()
            }
        })
    }
    catch (err) {
        res.status(400).send({ "error": `${err}` })
    }
}

module.exports = Auth
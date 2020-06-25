const express = require("express")

const userRouter = express.Router()

userRouter.get("/", (req, res) => {
    res.send("res di userRouter")
})

module.export = userRouter
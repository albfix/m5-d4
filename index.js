const express = require("express")

const app = express()

const userRouter = require("./src/routes/user")

app.get("/hello", async (req, res) => {
    console.log("funziona")
    res.status(200).send("funziona res.send")
})

app.use("/users", userRouter)
app.listen(3000, () => console.log("Server is running"))
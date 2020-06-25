const express = require("express")

const app = express()

app.use(express.json()) //SPECIFICARE PER RICEVERE QUANDO SI USA IL METODO POST

const userRouter = require("./src/routes/user")

app.get("/hello", async (req, res) => {
    console.log("funziona")
    res.status(200).send("funziona res send")
})

app.use("/users", userRouter)
app.listen(4000, () => console.log("Server is running"))


/////////////////////////////
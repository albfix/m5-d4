const express = require("express")
const fs = require("fs")
const path = require("path")

const getUsers = () => {
    const userJsonPath = path.join(__dirname, "users.json")
    const userBuffer = fs.readFileSync(userJsonPath)
    const userString = userBuffer.toString()
    const users = JSON.parse(userString)
    return users

}

//AGGIUNGERE AD ARRAY
const writeUsers = (users) => {
    const userJsonPath = path.join(__dirname, "users.json")
    fs.writeFileSync(userJsonPath, JSON.stringify(users))
}

const userRouter = express.Router()

userRouter.get("/", (req, res) => {
    const users = getUsers()
    res.send(users)
})

userRouter.post("/", (req, res) => {
    console.log(req.body)
    const users = getUsers() //PRENDO L'ARRAY
    users.push(req.body)//AGGIUNGO
    writeUsers(users)//SALVO NEL DATABASE
    res.send(req.body)//RESTITUISCO L'ARRAY AGGIORNATO
})

module.exports = userRouter

//////////////////////
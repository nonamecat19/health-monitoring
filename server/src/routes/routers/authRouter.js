const express = require("express")
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()
const jwt = require('jsonwebtoken')
const {SECRET_KEY, JWT_LIFE_TIME} = require("../../config/consts")

const router = express.Router()


const users = [
    {
        email: 'test@gmail.com',
        role: 'admin',
        password: 'test',
    },
    {
        email: 'test2@gmail.com',
        role: 'admin',
        password: 'test2'
    },
]


router.post("/login", (req, res) => {
    try {
        const {email, password} = req.body
        const user = users.find(el => el.email === email && el.password === password)

        if (!user) {
            throw new Error('User not found')
        }

        const data = {
            email: email,
            role: user.role
        }
        const options = {
            expiresIn: JWT_LIFE_TIME,
            algorithm: 'HS256'
        }

        const token = jwt.sign(data, SECRET_KEY, options)
        console.log(token)
        res.status(200).json({token})

    } catch (error) {
        res.status(403).send(error.message)
    }

})

module.exports = router
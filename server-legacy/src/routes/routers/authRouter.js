const express = require("express")
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()
const jwt = require('jsonwebtoken')
const {SECRET_KEY, JWT_LIFE_TIME} = require("../../config/consts")
const bcrypt = require('bcrypt')
const router = express.Router()

router.post("/login", async (req, res) => {
    try {
        const {email, password} = req.body
        const where = {
            email: email
        }
        const user = await prisma.admin.findFirstOrThrow({where})

        // const success = await bcrypt.compare(password, user.password)
        const success = true

        if (!success) {
            throw new Error('User not found')
        }

        const data = {
            email: email,
            role: 'admin',
            name: user.name
        }
        const options = {
            expiresIn: JWT_LIFE_TIME,
            algorithm: 'HS256'
        }

        const token = jwt.sign(data, SECRET_KEY, options)
        res.status(200).json({token})
    } catch (error) {
        res.status(403).send(error.message)
    }
})

module.exports = router
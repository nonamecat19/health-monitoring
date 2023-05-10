const express = require("express")
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const jwt = require('jsonwebtoken')
const passport = require('passport')

const router = express.Router()

const CLIENT_URL = 'http://localhost:5173/'

router.get('/google',
    passport.authenticate(
        'google',
        { scope: ['profile'] }
    )
)

router.get('/google/callback',
    passport.authenticate(
        'google',
        {failureRedirect: 'http://localhost:5173/login'}
    ),

    function (req, res) {
        // console.log(req.accessToken)
        res.redirect('http://localhost:5173/')
    }
)

router.get("/login/failed", (req, res) => {
    res.status(401).json({
        error: true,
        message: "Login failed"
    })
})

router.get("/login/success", (req, res) => {
    if (req.user) {
        res.status(200).json({
            error: false,
            message: 'Success'
        })
    } else {
        res.status(403).json({
            error: true,
            message: 'Not Authorized'
        })
    }
})

router.get('/logout', (req, res) => {
    req.logout()
    req.redirect(CLIENT_URL)
})


module.exports = router
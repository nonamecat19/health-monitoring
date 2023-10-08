const jwt = require('jsonwebtoken')
const {SECRET_KEY} = require("../config/consts");

function auth(req, res, next) {
    try {
        // const token = req.headers.authorization && req.headers.authorization.split(' ')[1]
        // if (!token) {
        //     return res.status(401).json({
        //         message: 'No token'
        //     })
        // }
        //
        // const decoded = jwt.verify(token, SECRET_KEY, { algorithm: 'HS256' })
        // if (!decoded) {
        //     return res.status(401).json({
        //         message: 'Token verify error'
        //     })
        // }
        //
        // req.user = decoded
        next()

    } catch (error) {
        return res.status(401).json({
            message: error.message
        })
    }

}
module.exports = auth
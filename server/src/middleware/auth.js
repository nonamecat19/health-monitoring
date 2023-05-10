const jwt = require('jsonwebtoken')

const GOOGLE_CLIENT_SECRET = "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"
const GOOGLE_CLIENT_ID = '261937984929-1d97orbeqrnblqg6k4jdbo71o7jn7587.apps.googleusercontent.com'

function auth(req, res, next) {


    console.log(req.headers.authorization)

    const token = req.headers.authorization && req.headers.authorization.split(' ')[1]
    console.log(token)
    if (!token) {
        return res.status(401).json({
            message: 'No token'
        })
    }

    jwt.verify(token, GOOGLE_CLIENT_ID, (err, decoded) => {
        console.log(decoded)
        console.log(err)
        if (err) {
            return res.status(401).json({
                message: 'Token verify error'
            })
        }

        req.user = decoded
        next()
    })
}
module.exports = auth
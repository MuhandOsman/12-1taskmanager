function authCheck (req, res, next) {
    if (!req.headers.token) {
        return res.status(401).send("please log in") }
    next()
}





module.exports = authCheck;
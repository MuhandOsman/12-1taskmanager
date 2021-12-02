
function loggingMiddleware (req, res ,next){
    console.log("so you are in middle of nowhere");
    next()
}










module.exports = loggingMiddleware
const errorHandler = (error,req, res , next) => {
    console.error(error);
    res.status(500).send("server error ").end()
}

module.exports = errorHandler;
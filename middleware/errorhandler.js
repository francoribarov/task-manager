const {CustomError} = require('../customErrors/customErrors')

const errorHandler = (err,req,res,next) => {
    if (err instanceof(CustomError)){
        return res.status(err.statusCode).json({ msg : err.message})
    }
    return res.status(500).json({ msg: 'something went wrong'})
}

module.exports = errorHandler
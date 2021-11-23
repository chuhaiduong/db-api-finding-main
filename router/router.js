const petRouter = require('./pet')
const authRouter = require('./auth')
const userRouter = require('./user')

function router(app) {
    app.use('/pet', petRouter)
    app.use('/account', authRouter)
    app.use('/user', userRouter)
}

module.exports = router
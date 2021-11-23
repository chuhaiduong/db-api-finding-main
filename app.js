const express =  require('express');
const mongoose =  require('mongoose');
const dotenv =  require('dotenv');
const cors = require('cors')
const router =  require('./router/router');

const app = express();
dotenv.config()

//db connection
mongoose.connect(
    process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => console.log('DB Connected'))

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
});

// Middleware
app.use(express.json());

// cors
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "*");
//     res.header("Access-Control-Allow-Methods", "*");
//     next();
// });
app.use(cors())

const port = process.env.PORT || 8000

router(app)
app.listen(port, () => {
    console.log(`Server is runing on port : ${port}`);
})
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const petSchema = new Schema({
    type: { type: String, require: true },
    date: { type: String, require: true },
    name: { type: String},
    age: { type: String },
    breed: { type: String },
    gender: { type: String },
    area: { type: String },
    weight: { type: String },
    height: { type: String },
    color: { type: String },
    describe: { type: String },
    image: { type: String, default: 'https://firebasestorage.googleapis.com/v0/b/upload-image-ebfc7.appspot.com/o/pet%2Fcat.jpg?alt=media&token=2702246c-b32f-451f-8c37-babf3196a108'}
})

module.exports = mongoose.model('Pet', petSchema)
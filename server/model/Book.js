import mongoose from 'mongoose'

const Schema = mongoose.Schema

const BookSchema = new Schema({
    name: {
        type: String 
    },
    genre:{
        type: String
    },
    author:{
        type: Schema.Types.ObjectId,
        ref: 'Author'
    }
})

const bookSchema = mongoose.model('books', BookSchema)
export default bookSchema
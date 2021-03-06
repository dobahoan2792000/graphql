import mongoose from 'mongoose'

const Schema = mongoose.Schema

const AuthorSchema = new Schema({
    name: {
        type: String 
    },
    age:{
        type: Number
    }
})

const authorSchema = mongoose.model('authors', AuthorSchema)
export default authorSchema
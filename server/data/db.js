import bookSchema from "../model/Book.js";
import authorSchema from "../model/Author.js";

const mongoDB = {
  getAllBooks: async (condition) => condition === null ? await bookSchema.find({}) : await bookSchema.find(condition),
  getAllAuthors: async () => {
    console.log("-------");
    const authors = await authorSchema.find();

    return authors;
  },
  getAuthorById: async (id) => await authorSchema.findById({ _id: id }),
  createAuthor: async (args) => {
    const newAuthor = new authorSchema({
      name: args.name,
      age: args.age,
    });
    return await newAuthor.save();
  },
  createBook: async (args) => {
    const newBook = new bookSchema({
      name: args.name,
      genre: args.genre,
      author: args.author,
    });
    return await newBook.save();
  },
};

export default mongoDB;

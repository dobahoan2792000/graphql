const resolvers = {
  Query: {
    books: async (parent, args, context) => await context.mongoDB.getAllBooks(),
    authors: async (parent, args, context) => {
      return await context.mongoDB.getAllAuthors();
    },
    book: async (parent, args, context) =>
      await context.mongoDB.getAllBooks().find((book) => book.id == args.id),
    author: async (parent, args, context) =>
      await context.mongoDB.getAuthorById(args.id),
  },
  Mutation: {
    createAuthor: async (parent, args, context) => {
      return await context.mongoDB.createAuthor(args);
    },
    createBook: async (parent, args, context) => {
      return await context.mongoDB.createBook(args);
    },
  },
  Book: {
    author: async (parent, args, context) => {
      return await context.mongoDB.getAuthorById(parent.author);
    },
  },
  Author: {
    books: async (parent, args, context) => {
      return await context.mongoDB.getAllBooks({ author: parent.id });
    },
  },
};

export default resolvers;

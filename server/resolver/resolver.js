const resolvers = {
  Query: {
    books: () => [
      {
        id: 1,
        name: "De men",
        genre: "Advanture",
        author: 1
      },
      {
        id: 2,
        name: "Meo",
        genre: "Animal",
        author: 2
      },
    ],
    authors: () => [
      {
        id: 1,
        name: "Nah",
        age: 20,
      },
      {
        id: 2,
        name: "Od",
        age: 21,
      },
    ],
    book: (parent, args) => [
        {
          id: 1,
          name: "De men",
          genre: "Advanture",
          author: 1
        },
        {
          id: 2,
          name: "Meo",
          genre: "Animal",
          author: 2
        },
      ].find(book => book.id == args.id),
    author: (parent, args) => [
        {
          id: 1,
          name: "Nah",
          age: 20,
        },
        {
          id: 2,
          name: "Od",
          age: 21,
        },
      ].find(author => author.id == args.id)
  },
  Book:{
    author: (parent,args) => {
        return [
            {
              id: 1,
              name: "Nah",
              age: 20,
            },
            {
              id: 2,
              name: "Od",
              age: 21,
            },
          ].find(author => author.id == parent.author)
    }
  }
};

export default resolvers;

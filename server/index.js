import express from "express";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import http from 'http';
import mongoose from 'mongoose'
import typeDefs from "./schema/schema.js";
import resolvers from "./resolver/resolver.js";
const connect = async () => {
  try{
    await mongoose.connect('mongodb://localhost/graphql', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  }catch(err){

  }
}
connect()
const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],

});


await server.start()
server.applyMiddleware({ app });
await new Promise(resolve => httpServer.listen({ port: 3001 }, resolve));

import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http'
import dotenv from 'dotenv'
import validateAuthentication from './middlewares/authentication.middlewares.js'
import connect from './database.js';
import typeDefs from './schema/index.js'
import resolvers from './resolvers/index.js'
import { validate } from 'graphql';

dotenv.config();

connect();

const startApolloServer = async (typeDefs, resolvers) => {
    const app = express();
    const httpServer= http.createServer(app);
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
        context: async ({ req }) => await validateAuthentication(req),
    });

    await server.start();
    server.applyMiddleware({ app }); 
    await new Promise(resolve => httpServer.listen({port: process.env.PORT }, resolve));
    console.log(`Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`);
};
startApolloServer(typeDefs,resolvers);

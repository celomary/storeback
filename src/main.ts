import { ApolloServer } from 'apollo-server';
import express from 'express';
import typeDefs from './schema';
import resolvers from './resolvers';

const app  = express();

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});

server.applyMiddleware({ app });

app.listen(433, '0.0.0.0', () => {
    console.log('Server is running on port 433');
});


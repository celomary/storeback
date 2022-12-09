import { ApolloServer } from 'apollo-server';

import typeDefs from './schema';
import resolvers from './resolvers';

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});

server.listen(parseInt(process.env.PORT) | 8000, '0.0.0.0').then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
var Koa = require("koa");
const {
  ApolloServer,
  gql,
  makeExecutableSchema,
} = require("apollo-server-koa");

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello asdassaasf!",
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = new Koa();
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen(4000, () =>
  console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`)
);

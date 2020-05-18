const Koa = require("koa");
const { ApolloServer, gql } = require("apollo-server-koa");
const { Client } = require("pg");

const typeDefs = require("./typedefs");
const resolvers = require("./resolvers");

async function start() {
  const client = new Client({
    user: "postgres",
    password: "postgres",
    host: process.env.NODE_ENV === "docker" ? "postgres" : "localhost",
    database: "test",
    port: 5432,
  });
  try {
    await client.connect();
    const res = await client.query("SELECT NOW()");
    console.log(res);
    await client.end();
  } catch (e) {
    console.log(e);
  }
}
start();
const app = new Koa();
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen(4000, () =>
  console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`)
);

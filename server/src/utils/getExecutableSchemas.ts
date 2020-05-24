import * as path from "path";
import fs from "fs";
import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import { importSchema } from "graphql-import";

export default function getExecuatbleSchemas(): GraphQLSchema[] {
  const folders = fs.readdirSync(path.join(__dirname, "../modules"));

  return folders.map((folder) => {
    const { resolver } = require(path.join(
      __dirname,
      `../modules/${folder}/resolvers`
    ));
    const typeDefs = importSchema(
      path.join(__dirname, `../modules/${folder}/schema.graphql`)
    );

    return makeExecutableSchema({ resolvers: resolver, typeDefs });
  });
}

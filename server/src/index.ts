import "reflect-metadata";
import { GraphQLServer } from "graphql-yoga";
import { mergeSchemas } from "graphql-tools";
import { createConnection } from "typeorm";

import getExecutableSchemas from "./utils/getExecutableSchemas";

const schemas = getExecutableSchemas();

const server = new GraphQLServer({ schema: mergeSchemas({ schemas }) });

const options = {
  formatError: (error: any) => {
    return {
      message: error.message || "Unkown Error",
      path: error.path,
    };
  },
};

createConnection().then(() => {
  server.start(options, () =>
    console.log("Server is running on localhost:4000")
  );
});

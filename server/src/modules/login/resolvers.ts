import { ResolverMap } from "../../types/graphqlUtils";

import login from "./loginUser";

export const resolver: ResolverMap = {
  Query: {
    login,
  },
};

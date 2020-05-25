import { ResolverMap } from "../../types/graphqlUtils";

import register from "./registerUser";

export const resolver: ResolverMap = {
  Mutation: {
    register,
  },
};

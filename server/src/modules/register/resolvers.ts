import { ResolverMap } from "../../types/graphqlUtils";
import { User } from "../../entity/User";

async function register(_: any, { email }: GQL.IRegisterOnMutationArguments) {
  const userAlreadyExists = await User.findOne({
    where: { email },
    select: ["id"],
  });

  if (userAlreadyExists) {
    return [
      {
        path: "email",
        message: "User with email already exists",
      },
    ];
  }

  const user = User.create({ email });

  await user.save();

  return true;
}

export const resolver: ResolverMap = {
  Mutation: {
    register,
  },
};

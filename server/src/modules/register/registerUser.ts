import { validate } from "class-validator";

import { User } from "../../entity/User";
import { MutationRegisterArgs } from "../../types/graphql";

async function doesUserExist(email: string): Promise<boolean> {
  const userAlreadyExists = await User.findOne({
    where: { email },
    select: ["id"],
  });
  return Boolean(userAlreadyExists);
}

export default async function register(
  _: any,
  { email }: MutationRegisterArgs
): Promise<User | false> {
  if (await doesUserExist(email)) {
    throw new Error("User already exists");
  }

  const user = User.create({ email, createdOn: new Date() });

  const errors = await validate(user);
  if (errors.length) {
    return false;
  }

  const newUser = await user.save();

  return newUser;
}

import { User } from "../../entity/User";
import { MutationRegisterArgs } from "../../types/graphql";

export default async function login(
  _: any,
  { email }: MutationRegisterArgs
): Promise<true> {
  const user = await User.findOne({
    where: { email },
  });

  if (!user) {
    throw new Error("Invalid Login");
  }

  return true;
}

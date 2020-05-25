import bcrypt from "bcryptjs";

import { User } from "../../entity/User";
import { QueryLoginArgs } from "../../types/graphql";

const inValidLoginMessage = "Invalid Login";

export default async function login(
  _: any,
  { email, password }: QueryLoginArgs
): Promise<true> {
  const user = await User.findOne({
    where: { email },
  });

  if (!user) {
    throw new Error(inValidLoginMessage);
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw new Error(inValidLoginMessage);
  }

  return true;
}

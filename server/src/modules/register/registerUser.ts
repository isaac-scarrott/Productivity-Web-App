import { validate } from "class-validator";
import bcrypt from "bcryptjs";

import { User } from "../../entity/User";
import { MutationRegisterArgs } from "../../types/graphql";

// Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

async function doesUserExist(email: string): Promise<boolean> {
  const userAlreadyExists = await User.findOne({
    where: { email },
    select: ["id"],
  });

  return Boolean(userAlreadyExists);
}

function isValidPassword(password: string): boolean {
  return passwordRegex.test(password);
}

async function validateAndCreateUser(
  email: string,
  password: string
): Promise<User> {
  if (await doesUserExist(email)) {
    throw new Error("User already exists");
  }

  let errors: string[] = [];

  if (!isValidPassword(password)) {
    errors.push("password");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = User.create({ email, password: hashedPassword });

  const classValidatorErrors = await validate(user);
  errors = [...errors, ...classValidatorErrors.map((err) => err.property)];

  if (errors.length) {
    throw new Error(JSON.stringify(errors));
  }

  return user;
}

export default async function register(
  _: any,
  { email, password }: MutationRegisterArgs
): Promise<User | false> {
  const user = await validateAndCreateUser(email, password);

  const newUser = await user.save();

  return newUser;
}

import { AppDataSource } from "../../data-source";
import { hash } from "bcrypt";

import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IUser } from "../../interfaces/user/user";

async function createUserService({ username, password }: IUser): Promise<User> {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({ where: { username: username } });

  if (user) throw new AppError(403, "This username is already being used");

  const newUser = userRepository.create({
    username: username,
    password: await hash(password, 10),
  });

  await userRepository.save(newUser);
  return newUser;
}

export default createUserService;

import { AppDataSource } from "../../data-source";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

import { AppError } from "../../errors/appError";
import { ISessionCreate } from "../../interfaces/session/session";
import { User } from "../../entities/user.entity";

async function sessionService({
  username,
  password,
}: ISessionCreate): Promise<string> {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      username: username,
    },
  });

  if (!user) throw new AppError(403, "Invalid username or password");

  const match = await compare(password, user.password);
  if (!match) throw new AppError(403, "Invalid username or password");

  const token = jwt.sign(
    { username: user.username },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "3d",
      subject: user.id,
    }
  );

  return token;
}

export default sessionService;

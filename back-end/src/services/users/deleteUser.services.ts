import AppDataSource from "../../data-source";

import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

async function deleteUserService(userId: string): Promise<string> {
  const userRepository = AppDataSource.getRepository(User);

  if (!userId) throw new AppError(403, "Missing id param");

  const deletedUser = await userRepository.findOneBy({ id: userId });

  if (!deletedUser) throw new AppError(404, "This user does not exists");

  await userRepository.delete(deletedUser.id);

  return "User deleted successfully";
}

export default deleteUserService;

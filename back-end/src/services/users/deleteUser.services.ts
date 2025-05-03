import { AppDataSource } from "../../data-source";

import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

async function deleteUserService(id: string): Promise<string> {
  const userRepository = AppDataSource.getRepository(User);

  const deletedUser = await userRepository.findOneBy({ id });

  if (!deletedUser) throw new AppError(404, "This user does not exists");

  await userRepository.delete(deletedUser.id);

  return "User deleted successfully";
}

export default deleteUserService;

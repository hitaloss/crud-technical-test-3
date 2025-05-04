import { AppDataSource } from "../../data-source";

import { Ingredients } from "../../entities/ingredients.entity";
import { AppError } from "../../errors/appError";

async function deleteIngredientsServices(
  ingredientsId: string
): Promise<string> {
  const ingredientsRepository = AppDataSource.getRepository(Ingredients);

  const ingredients = ingredientsRepository.findOneBy({ id: ingredientsId });

  if (!ingredients) throw new AppError(404, "Ingredients not found");

  await ingredientsRepository.delete({ id: ingredientsId });

  return "Ingredients deleted with success";
}

export default deleteIngredientsServices;

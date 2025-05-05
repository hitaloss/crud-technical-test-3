import AppDataSource from "../../data-source";

import { Recipe } from "../../entities/recipe.entity";
import { AppError } from "../../errors/appError";

async function deleteRecipeService(recipeId: string): Promise<void> {
  const recipeRepository = AppDataSource.getRepository(Recipe);

  if (!recipeId) throw new AppError(403, "Missing id param");

  const recipe = recipeRepository.findOneBy({ id: recipeId });

  if (!recipe) throw new AppError(404, "Recipe not found");

  recipeRepository.delete({ id: recipeId });

  return;
}

export default deleteRecipeService;

import { AppDataSource } from "../../data-source";

import { Recipe } from "../../entities/recipe.entity";
import { AppError } from "../../errors/appError";

async function deleteRecipeService(recipeId: string): Promise<string> {
  const recipeRepository = AppDataSource.getRepository(Recipe);

  const recipe = recipeRepository.findOneBy({ id: recipeId });

  if (!recipe) throw new AppError(404, "Recipe not found");

  return "Recipe deleted with success.";
}

export default deleteRecipeService;

import AppDataSource from "../../data-source";

import { Recipe } from "../../entities/recipe.entity";
import { AppError } from "../../errors/appError";
import { IRecipePatch } from "../../interfaces/recipe/recipe";

async function updateRecipeService(
  recipeId: string,
  { title, imageUrl, flavor, complexity }: IRecipePatch
): Promise<Recipe> {
  const recipeRepository = AppDataSource.getRepository(Recipe);

  const recipe = await recipeRepository.findOneBy({ id: recipeId });

  if (!recipe) throw new AppError(404, "Recipe not found");

  if (flavor && flavor !== "Doce" && flavor !== "Salgado") {
    throw new AppError(400, 'Flavor must be "Doce" or "Salgado"');
  }

  if (
    complexity &&
    complexity !== "Fácil" &&
    complexity !== "Médio" &&
    complexity !== "Difícil"
  ) {
    throw new AppError(400, 'Complexity must be "Fácil", "Médio" or "Difícil"');
  }

  await recipeRepository.update(recipeId, {
    title: title ? title : recipe.title,
    image_url: imageUrl ? imageUrl : recipe.image_url,
    flavor: flavor ? flavor : recipe.flavor,
    complexity: complexity ? complexity : recipe.complexity,
  });

  const updatedRecipe = await recipeRepository.findOneBy({ id: recipeId });

  return updatedRecipe!;
}

export default updateRecipeService;

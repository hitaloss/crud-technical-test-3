import AppDataSource from "../../data-source";
import { Ingredients } from "../../entities/ingredients.entity";

import { Recipe } from "../../entities/recipe.entity";
import { AppError } from "../../errors/appError";
import { IRecipeCreate } from "../../interfaces/recipe/recipe";

async function createRecipeService({
  title,
  imageUrl,
  flavor,
  complexity,
  ingredients,
}: IRecipeCreate): Promise<Recipe> {
  const recipeRepository = AppDataSource.getRepository(Recipe);
  const ingredientsRepository = AppDataSource.getRepository(Ingredients);

  if (!title || !imageUrl || !flavor || !complexity) {
    throw new AppError(403, "Missing body params");
  }

  if (flavor !== "Doce" && flavor !== "Salgado") {
    throw new AppError(400, 'Flavor must be "Doce" or "Salgado"');
  }

  if (
    complexity !== "Fácil" &&
    complexity !== "Médio" &&
    complexity !== "Difícil"
  ) {
    throw new AppError(400, 'Complexity must be "Fácil", "Médio" or "Difícil"');
  }

  const newRecipe = recipeRepository.create({
    title,
    image_url: imageUrl,
    flavor,
    complexity,
    ingredients: ingredients.map((ingredient) =>
      ingredientsRepository.create({
        name: ingredient.name,
        quantity: ingredient.quantity,
      })
    ),
  });

  await recipeRepository.save(newRecipe);
  return newRecipe;
}

export default createRecipeService;

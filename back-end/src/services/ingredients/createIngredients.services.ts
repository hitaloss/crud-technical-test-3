import { AppDataSource } from "../../data-source";

import { Ingredients } from "../../entities/ingredients.entity";
import { Recipe } from "../../entities/recipe.entity";
import { AppError } from "../../errors/appError";
import { IIngredientsCreate } from "../../interfaces/ingredients/ingredients";

async function createIngredientsServices(
  recipeId: string,
  { name, quantity }: IIngredientsCreate
): Promise<Ingredients> {
  const ingredientsRepository = AppDataSource.getRepository(Ingredients);
  const recipeRepository = AppDataSource.getRepository(Recipe);

  if (!name) throw new AppError(400, "Name field required");

  const recipe = await recipeRepository.findOneBy({ id: recipeId });
  if (!recipe) throw new AppError(404, "Recipe not found");

  const newIngredient = ingredientsRepository.create({
    name,
    quantity: quantity ?? quantity,
    recipe: recipe,
  });

  await ingredientsRepository.save(newIngredient);

  return newIngredient;
}

export default createIngredientsServices;

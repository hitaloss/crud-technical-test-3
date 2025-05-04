import { AppDataSource } from "../../data-source";

import { AppError } from "../../errors/appError";
import { Ingredients } from "../../entities/ingredients.entity";
import { IIngredientsPatch } from "../../interfaces/ingredients/ingredients";

async function updateIngredientsServices(
  ingredientsId: string,
  { name, quantity }: IIngredientsPatch
): Promise<Ingredients> {
  const ingredientsRepository = AppDataSource.getRepository(Ingredients);

  const ingredients = await ingredientsRepository.findOneBy({
    id: ingredientsId,
  });

  if (!ingredients) throw new AppError(404, "Ingredient not found");

  await ingredientsRepository.update(ingredientsId, {
    name: name ? name : ingredients.name,
    quantity: quantity ? quantity : quantity,
  });

  const updatedIngredients = await ingredientsRepository.findOneBy({
    id: ingredientsId,
  });

  return updatedIngredients!;
}

export default updateIngredientsServices;

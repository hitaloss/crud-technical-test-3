import { AppDataSource } from "../../data-source";

import { Ingredients } from "../../entities/ingredients.entity";

async function readIngredientsServices(): Promise<Ingredients[]> {
  const ingredientsRepository = AppDataSource.getRepository(Ingredients);

  const ingredients = await ingredientsRepository.find();

  return ingredients;
}

export default readIngredientsServices;

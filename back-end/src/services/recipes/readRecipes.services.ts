import { AppDataSource } from "../../data-source";

import { Recipe } from "../../entities/recipe.entity";

async function readRecipesService(): Promise<Recipe[]> {
  const recipeRepository = AppDataSource.getRepository(Recipe);

  const recipes = await recipeRepository.find();

  return recipes;
}

export default readRecipesService;

export interface IIngredientsCreate {
  name: string;
  quantity?: string;
}

export interface IIngredientsPatch {
  name?: string;
  quantity?: string;
}

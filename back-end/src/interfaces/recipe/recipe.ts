export interface IRecipeCreate {
  title: string;
  imageUrl: string;
  flavor: "Doce" | "Salgado";
  complexity: "Fácil" | "Médio" | "Difícil";
}

export interface IRecipePatch {
  title?: string;
  imageUrl?: string;
  flavor?: "Doce" | "Salgado";
  complexity?: "Fácil" | "Médio" | "Difícil";
}

export interface IRecipePatchRequest {
  title?: string;
  image_url?: string;
  flavor?: "Doce" | "Salgado";
  complexity?: "Fácil" | "Médio" | "Difícil";
}

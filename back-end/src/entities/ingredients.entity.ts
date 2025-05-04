import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { uuid } from "uuidv4";

import { Recipe } from "./recipe.entity";

@Entity("ingredients")
export class Ingredients {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 100 })
  name: string;

  @Column({ nullable: true })
  quantity?: string;

  @ManyToOne(() => Recipe, (recipe) => recipe.ingredients, {
    onDelete: "CASCADE",
  })
  recipe: Recipe;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Ingredients } from "./ingredients.entity";
import { uuid } from "uuidv4";

@Entity("recipe")
export class Recipe {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 100 })
  title: string;

  @Column({ length: 300 })
  image_url: string;

  @Column({ length: 15 })
  flavor: string;

  @Column({ length: 50 })
  complexity: string;

  @OneToMany(() => Ingredients, (ingredients) => ingredients.recipe, {
    cascade: true,
    eager: true,
  })
  ingredients: Ingredients[];

  constructor() {
    if (!this.id) this.id = uuid();
  }
}

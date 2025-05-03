import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

import { Exclude } from "class-transformer";
import { v4 as uuid } from "uuid";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 100, unique: true })
  username: string;

  @Column({ length: 300, unique: true })
  @Exclude()
  password: string;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}

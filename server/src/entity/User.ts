import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { IsEmail } from "class-validator";

@Entity({ name: "users" })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column("varchar", { length: 255, unique: true })
  @IsEmail()
  email: string;

  @Column("text")
  password: string;

  @Column("date", { default: new Date() })
  createdOn: Date;
}

import { Field, ObjectType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Expense } from "./Expense";

@ObjectType()
@Entity("users")
export class User extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;

  @Field(() => String)
  @Column({ unique: true, nullable: false })
  email!: string;

  @Column()
  password!: string;

  @Column({ default: false })
  isActive!: boolean;

  @OneToMany(() => Expense, (expense) => expense.user)
  expenses!: Expense[];
}

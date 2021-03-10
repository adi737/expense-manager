import { Field, Float, Int, ObjectType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./User";

@ObjectType()
@Entity("expenses")
export class Expense extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @CreateDateColumn()
  createdAt!: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt!: Date;

  @Field()
  @Column()
  category!: string;

  @Field()
  @Column()
  product!: string;

  @Field(() => Float)
  @Column("float")
  price!: number;

  @Field(() => String)
  @Column()
  userId!: string;

  @ManyToOne(() => User, (user) => user.expenses)
  user!: User;
}

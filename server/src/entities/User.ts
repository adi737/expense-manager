import { Field, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm";

@ObjectType()
@Entity('users')
export class User extends BaseEntity {
    @Field(() => String)
    @PrimaryGeneratedColumn('uuid')
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

    @Column({ nullable: false })
    password!: string;

    @Column({ default: false })
    isActive!: boolean;
}

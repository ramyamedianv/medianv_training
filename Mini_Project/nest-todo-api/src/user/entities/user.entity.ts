import { Todo } from "src/todo/entities/todo.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    firstName:string;

    @Column()
    lastName:string;

    @Column({ unique: true })
    email:string;

    @Column({ select: false })
    password:string;

    @OneToMany(() => Todo, (todo) => todo.user)
  todos: Todo[];
}

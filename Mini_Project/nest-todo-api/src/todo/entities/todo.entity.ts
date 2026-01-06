import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';

export enum TodoPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: false })
  isCompleted: boolean;

  @Column({
    type: 'enum',
    enum: TodoPriority,
    default: TodoPriority.MEDIUM,
  })
  priority: TodoPriority;

  @Column({ nullable: true })
  category: string;

  @Column({ default: false })
  isPinned: boolean;

  @Column({ type: 'date', nullable: true })
  dueDate: Date;

  @ManyToOne(() => User, (user) => user.todos, {
    onDelete: 'CASCADE',
  })
  user: User;
}

import {Injectable, NotFoundException, ForbiddenException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo, TodoPriority } from './entities/todo.entity';
import { User } from '../user/entities/user.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createTodo(userId: number, dto: CreateTodoDto): Promise<Todo> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const todo = this.todoRepository.create({
      title: dto.title,
      isCompleted: dto.isCompleted ?? false,
      priority: dto.priority ?? TodoPriority.MEDIUM,
      category: dto.category,
      isPinned: dto.isPinned ?? false,
      dueDate: dto.dueDate,
      user,
    });

    return this.todoRepository.save(todo);
  }

  async getTodosByUser(
    userId: number,
    filters?: { category?: string; priority?: TodoPriority },
  ): Promise<any[]> {
    console.log(userId)
    const query = this.todoRepository.createQueryBuilder('todo')
      .where('todo.userId = :userId', { userId });
    if (filters?.category) {
      query.andWhere('todo.category = :category', {
        category: filters.category,
      });
    }

    if (filters?.priority) {
      query.andWhere('todo.priority = :priority', {
        priority: filters.priority,
      });
    }

    query.orderBy('todo.isPinned', 'DESC')
      .addOrderBy('todo.priority', 'DESC')
      .addOrderBy('todo.dueDate', 'ASC');

    const todos = await query.getMany();

    return todos.map((todo) => ({
      ...todo,
      status:
        todo.dueDate &&
        !todo.isCompleted &&
        new Date(todo.dueDate) < new Date()
          ? 'OVERDUE'
          : 'ACTIVE',
    }));
  }

  async getTodoById(id: number, userId: number): Promise<Todo> {
    const todo = await this.todoRepository.findOne({
      where: { id },
      relations: ['user'],
    });

    if (!todo) {
      throw new NotFoundException('Todo not found');
    }

    if (todo.user.id !== userId) {
      throw new ForbiddenException('Access denied');
    }

    return todo;
  }

  async updateTodo(id: number, userId: number, dto: UpdateTodoDto) {
  const todo = await this.todoRepository.findOne({
    where: { id },
    relations: ['user'],
  });
  if (!todo) {
    throw new NotFoundException('Todo not found');
  }
  if (todo.user.id !== userId) {
    throw new ForbiddenException('Access denied');
  }
  Object.assign(todo, dto);
  return this.todoRepository.save(todo);
}

  async deleteTodo(
    id: number,
    userId: number,
  ){
    const todo = await this.getTodoById(id, userId);

    const data=await this.todoRepository.remove(todo);

    return data;
  }
}

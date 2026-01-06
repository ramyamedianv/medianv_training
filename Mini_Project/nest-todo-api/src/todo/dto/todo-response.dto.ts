import { ApiProperty } from '@nestjs/swagger';
import { TodoPriority } from '../entities/todo.entity';

export class TodoUserDto {
  @ApiProperty({ example: 3 })
  id: number;

  @ApiProperty({ example: 'neha' })
  firstName: string;

  @ApiProperty({ example: 'chaudhan' })
  lastName: string;

  @ApiProperty({ example: 'neha@gmail.com' })
  email: string;
}

export class TodoItemDto {
  @ApiProperty({ example: 8 })
  id: number;

  @ApiProperty({ example: 'Pay electricity bill' })
  title: string;

  @ApiProperty({ example: false })
  isCompleted: boolean;

  @ApiProperty({ enum: TodoPriority, example: TodoPriority.HIGH })
  priority: TodoPriority;

  @ApiProperty({ example: 'Finance' })
  category: string;

  @ApiProperty({ example: true })
  isPinned: boolean;

  @ApiProperty({ example: '2026-01-09' })
  dueDate: string;
 
}

export class TodoWithUserDto extends TodoItemDto {
  @ApiProperty({ type: TodoUserDto })
  user: TodoUserDto;
}

export class CreateTodoResponseDto {
  @ApiProperty({ example: 201 })
  statusCode: number;

  @ApiProperty({ example: 'Todo created successfully' })
  message: string;

  @ApiProperty({ type: TodoWithUserDto })
  data: TodoWithUserDto;
}

export class GetTodosResponseDto {
  @ApiProperty({ example: 200 })
  statusCode: number;

  @ApiProperty({ example: 'Todos fetched successfully' })
  message: string;

  @ApiProperty({ type: [TodoItemDto] })
  data: TodoItemDto[];
}

export class GetTodoByIdResponseDto {
  @ApiProperty({ example: 200 })
  statusCode: number;

  @ApiProperty({ example: 'Todo fetched successfully' })
  message: string;

  @ApiProperty({ type: TodoItemDto })
  data: TodoItemDto;
}

export class UpdateTodoResponseDto {
  @ApiProperty({ example: 200 })
  statusCode: number;

  @ApiProperty({ example: 'Todo updated successfully' })
  message: string;

  @ApiProperty({
    example: {
      id: 8,
      isCompleted: true,
      user: {
        id: 3,
        firstName: 'neha',
        lastName: 'chaudhan',
        email: 'neha@gmail.com',
      },
    },
  })
  data: {
    id: number;
    isCompleted: boolean;
    user: TodoUserDto;
  };
}

export class DeleteTodoResponseDto {
  @ApiProperty({ example: 200 })
  statusCode: number;

  @ApiProperty({ example: 'Todo deleted successfully' })
  message: string;

  @ApiProperty({ type: TodoWithUserDto })
  data: TodoWithUserDto;
}

export class ErrorResponseDto {
  @ApiProperty({ example: 401 })
  statusCode: number;

  @ApiProperty({ example: 'Unauthorized' })
  message: string;
}

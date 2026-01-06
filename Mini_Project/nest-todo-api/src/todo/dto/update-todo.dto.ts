import {IsBoolean,IsOptional,IsString,IsEnum,IsDateString,
} from 'class-validator';
import { TodoPriority } from '../entities/todo.entity';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateTodoDto {
  @ApiPropertyOptional({
    example: 'Update NestJS project',
    description: 'Updated title of the todo',
  })
  @IsOptional()
  @IsString()
  title?: string;

   @ApiPropertyOptional({
    example: true,
    description: 'Mark todo as completed or not',
  })
  @IsOptional()
  @IsBoolean()
  isCompleted?: boolean;

  @ApiPropertyOptional({
    enum: TodoPriority,
    example: TodoPriority.MEDIUM,
    description: 'Updated priority level',
  })
  @IsOptional()
  @IsEnum(TodoPriority)
  priority?: TodoPriority;

  @ApiPropertyOptional({
    example: 'Personal',
    description: 'Updated category name',
  })
  @IsOptional()
  @IsString()
  category?: string;

  @ApiPropertyOptional({
    example: true,
    description: 'Pin or unpin the todo',
  })
  @IsOptional()
  @IsBoolean()
  isPinned?: boolean;

  @ApiPropertyOptional({
    example: '2026-01-15',
    description: 'Updated due date (YYYY-MM-DD)',
  })
  @IsOptional()
  @IsDateString()
  dueDate?: Date;
}

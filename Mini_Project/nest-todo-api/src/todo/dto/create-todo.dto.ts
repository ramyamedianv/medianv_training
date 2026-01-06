import {
  IsNotEmpty,
  IsString,
  IsBoolean,
  IsOptional,
  IsEnum,
  IsDateString,
} from 'class-validator';
import { TodoPriority } from '../entities/todo.entity';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTodoDto {
   @ApiProperty({
    example: 'Finish NestJS project',
    description: 'Title of the todo task',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiPropertyOptional({
    example: false,
    description: 'Whether the todo is completed',
  })
  @IsOptional()
  @IsBoolean()
  isCompleted?: boolean;

  @ApiPropertyOptional({
    enum: TodoPriority,
    example: TodoPriority.HIGH,
    description: 'Priority level of the todo',
  })
  @IsOptional()
  @IsEnum(TodoPriority)
  priority?: TodoPriority;

   @ApiPropertyOptional({
    example: 'Work',
    description: 'Category of the todo',
  })
  @IsOptional()
  @IsString()
  category?: string;

  @ApiPropertyOptional({
    example:true,
    description:'Pin the todo to top'
  })
  @IsOptional()
  @IsBoolean()
  isPinned?: boolean;

  @ApiPropertyOptional({
    example: '2026-01-10',
    description: 'Due date of the todo (YYYY-MM-DD)',
  })
  @IsOptional()
  @IsDateString()
  dueDate?: Date;
}

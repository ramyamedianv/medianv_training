import { Body, Controller, Delete, Get, Param, Patch, Post, ParseIntPipe, UseGuards, HttpCode, HttpException, Query,
} from '@nestjs/common';
import {ApiTags,ApiBearerAuth,ApiOperation,ApiResponse,ApiParam,ApiQuery,
} from '@nestjs/swagger';

import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { GetUser } from 'src/auth/get-user.decorator';
import { STATUS_CODES } from 'src/common/constants/status-codes';
import { TodoPriority } from './entities/todo.entity';
import { CreateTodoResponseDto, DeleteTodoResponseDto, ErrorResponseDto, GetTodoByIdResponseDto, GetTodosResponseDto, UpdateTodoResponseDto } from './dto/todo-response.dto';

@ApiTags('Todos')
@ApiBearerAuth()
@Controller('todos')
@UseGuards(JwtAuthGuard)
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  @HttpCode(STATUS_CODES.CREATED)
  @ApiOperation({ summary: 'Create a new todo' })
  @ApiResponse({ status: 201, type: CreateTodoResponseDto })
  @ApiResponse({ status: 401, type: ErrorResponseDto })

  async createTodo(
    @GetUser() user: any,
    @Body() dto: CreateTodoDto,
  ) {
    try {
      const todo = await this.todoService.createTodo(user.id, dto);

      return {
        statusCode: STATUS_CODES.CREATED,
        message: 'Todo created successfully',
        data: todo,
      };
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to create todo',
        error.status || STATUS_CODES.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // ================= GET MY TODOS =================
  @Get()
  @HttpCode(STATUS_CODES.OK)
  @ApiOperation({ summary: 'Get all todos of logged-in user' })
  @ApiQuery({
    name: 'category',
    required: false,
    example: 'Work',
  })
  @ApiQuery({
    name: 'priority',
    required: false,
    enum: TodoPriority,
  })
  @ApiResponse({ status: 200, type: GetTodosResponseDto })
  async getMyTodos(
    @GetUser() user: any,
    @Query('category') category?: string,
    @Query('priority') priority?: TodoPriority,
  ) {
    try {
      const todos = await this.todoService.getTodosByUser(user.id, {
        category,
        priority,
      });

      return {
        statusCode: STATUS_CODES.OK,
        message: 'Todos fetched successfully',
        data: todos,
      };
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to fetch todos',
        error.status || STATUS_CODES.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  @HttpCode(STATUS_CODES.OK)
  @ApiOperation({ summary: 'Get a todo by ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    example: 8,
  })
  @ApiResponse({ status: 200, type: GetTodoByIdResponseDto })

  async getTodoById(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: any,
  ) {
    try {
      const todo = await this.todoService.getTodoById(id, user.id);

      return {
        statusCode: STATUS_CODES.OK,
        message: 'Todo fetched successfully',
        data: todo,
      };
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to fetch todo',
        error.status || STATUS_CODES.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Patch(':id')
  @HttpCode(STATUS_CODES.OK)
  @ApiOperation({ summary: 'Update a todo by ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    example: 8,
  })
 @ApiResponse({ status: 200, type: UpdateTodoResponseDto })

  async updateTodo(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: any,
    @Body() dto: UpdateTodoDto,
  ) {
    try {
      const updatedTodo = await this.todoService.updateTodo(
        id,
        user.id,
        dto,
      );

      return {
        statusCode: STATUS_CODES.OK,
        message: 'Todo updated successfully',
        data: updatedTodo,
      };
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to update todo',
        error.status || STATUS_CODES.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(':id')
  @HttpCode(STATUS_CODES.OK)
  @ApiOperation({ summary: 'Delete a todo by ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    example: 9,
  })
  @ApiResponse({ status: 200, type: DeleteTodoResponseDto })

  async deleteTodo(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: any,
  ) {
    try {
      const result = await this.todoService.deleteTodo(id, user.id);

      return {
        statusCode: STATUS_CODES.OK,
        message: 'Todo deleted successfully',
        data: result,
      };
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to delete todo',
        error.status || STATUS_CODES.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

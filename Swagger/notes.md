
# Swagger in NestJS – API Documentation

## Overview

Swagger is a tool used to **document REST APIs**.
In NestJS, Swagger helps developers **visualize, test, and understand APIs** without needing external tools like Postman.

NestJS uses the package **`@nestjs/swagger`** to integrate Swagger easily.

---

## Why Swagger is Used

* Automatically generates API documentation
* Shows all endpoints, request bodies, and responses
* Allows testing APIs directly from the browser
* Helps frontend and backend teams collaborate easily
* Keeps API documentation always up to date

---

## Installing Swagger in NestJS

```bash
npm install @nestjs/swagger swagger-ui-express
```

---

## Swagger Setup in NestJS

Swagger is usually configured in the **`main.ts`** file.

### Basic Swagger Setup

```ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('API documentation using Swagger')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
```

### Swagger URL

```
http://localhost:3000/api
```

---

## Swagger Decorators

Swagger decorators are used to **describe controllers, routes, request bodies, and responses**.

They help Swagger understand how your API works.

---

## Common Swagger Decorators

### `@ApiTags()`

Groups APIs in Swagger UI.

```ts
@ApiTags('Products')
@Controller('products')
export class ProductsController {}
```

---

### `@ApiOperation()`

Describes what an API endpoint does.

```ts
@ApiOperation({ summary: 'Get all products' })
@Get()
findAll() {}
```

---

### `@ApiResponse()`

Describes possible responses from an API.

```ts
@ApiResponse({ status: 200, description: 'Success' })
@ApiResponse({ status: 404, description: 'Not Found' })
```

---

### `@ApiParam()`

Documents route parameters.

```ts
@ApiParam({ name: 'id', type: Number })
@Get(':id')
findOne(@Param('id') id: number) {}
```

---

### `@ApiQuery()`

Documents query parameters.

```ts
@ApiQuery({ name: 'search', required: false })
@Get()
find(@Query('search') search: string) {}
```

---

### `@ApiBody()`

Documents request body.

```ts
@ApiBody({
  schema: {
    example: {
      name: 'Laptop',
      price: 50000
    }
  }
})
@Post()
create(@Body() data: any) {}
```

---

### `@ApiProperty()`

Used inside **DTOs** to describe fields.

```ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'Mobile' })
  name: string;

  @ApiProperty({ example: 20000 })
  price: number;
}
```

---

## Using Swagger with DTOs

Swagger automatically reads DTOs when they are used in controllers.

```ts
@Post()
create(@Body() createProductDto: CreateProductDto) {}
```

This ensures:

* Proper request body documentation
* Validation and documentation stay in sync

---

## Swagger Authentication (JWT Example)

```ts
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Get('profile')
getProfile() {}
```

Swagger will show a **Authorize** button for JWT tokens.

---

## Advantages of Swagger in NestJS

* Auto-generated API documentation
* Reduces manual documentation effort
* Improves developer experience
* Makes APIs easy to test and understand
* Works seamlessly with DTOs and validation

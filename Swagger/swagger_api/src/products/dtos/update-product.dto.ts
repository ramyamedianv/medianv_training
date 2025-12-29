import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateProductDto {
  @ApiPropertyOptional({
    example: 'Laptop',
    description: 'Updated product name',
  })
  name?: string;

  @ApiPropertyOptional({
    example: 80000,
    description: 'Updated product price',
  })
  price?: number;
}

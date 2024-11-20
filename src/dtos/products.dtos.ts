/* eslint-disable prettier/prettier */
import { IsNumber, IsString, IsUrl, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;

  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  readonly stock: number;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}

/* eslint-disable prettier/prettier */

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  HttpStatus,
  HttpCode,
  Res,
  ParseIntPipe,
} from '@nestjs/common';

import { Response } from 'express';

import { ProductsService } from './../../services/products/products.service';
import { CreateProductDto, UpdateProductDto } from './../../dtos/products.dtos';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Get('/filter')
  getProductFilter() {
    return { message: `soy un filter` };
  }

  @Get('/:productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    return this.productsService.findOne(productId);
  }

  @Get('')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.productsService.findAll();
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productsService.remove(+id);
  }
}

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
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('/filter')
  getProductFilter() {
    return `soy un filter`;
  }

  @Get('/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  @Get('')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return { message: 'Accion de crear', payload };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return { id, payload };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return { message: id };
  }
}

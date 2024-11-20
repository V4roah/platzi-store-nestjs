/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get('')
  getOrders() {
    return 'soy orders';
  }

  @Get(':id')
  getOrder() {
    return 'soy un order';
  }

  @Get(':id/products')
  getProducts() {
    return 'soy un order';
  }

  @Post()
  create(@Body() payload: any) {
    return { message: `Accion de crear`, payload };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return { id, payload };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return { id };
  }
}

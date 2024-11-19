/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';

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
}

/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  getCustomers() {
    return 'soy customers';
  }

  @Get(':id')
  getCustomer() {
    return 'soy un customer';
  }

  @Post()
  create(@Body() payload: any) {
    return { message: `Accion de crear`, payload };
  }
}

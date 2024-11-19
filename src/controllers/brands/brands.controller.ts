/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get('')
  getBrands() {
    return 'soy brands';
  }

  @Get(':id')
  getBrand() {
    return 'soy un brand';
  }

  @Post()
  create(@Body() payload: any) {
    return { message: `Accion de crear`, payload };
  }
}

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

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return { id, payload };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return { id };
  }
}

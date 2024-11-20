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

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return 'soy users';
  }

  @Get(':id')
  getUser() {
    return 'soy un user';
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

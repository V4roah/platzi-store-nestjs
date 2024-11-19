/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';

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
}

/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { Product } from 'src/entities/product.entity';
import { CreateProductDto, UpdateProductDto } from './../../dtos/products.dtos';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'bla bla',
      price: 100,
      stock: 10,
      image: '',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'bla bla',
      price: 100,
      stock: 10,
      image: '',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'bla bla',
      price: 100,
      stock: 10,
      image: '',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException(`product ${id}  not found`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    console.log(payload);
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }

  remove(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    this.products.splice(index, 1);
    return true;
  }
}

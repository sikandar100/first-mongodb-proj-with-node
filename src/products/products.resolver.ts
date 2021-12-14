import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { ProductsService } from './products.service';
import { CreateProductInput } from './dto/create-product.input';

@Resolver('Product')
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Mutation('createProduct')
  create(@Args('createProductInput') createProductInput: CreateProductInput) {
    return this.productsService.create(createProductInput);
  }

  @Query('products')
  findAll() {
    return this.productsService.findAll();
  }
}

import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { ProductsUsersService } from './products-users.service';
import { CreateProductsUserInput } from './dto/create-products-user.input';

import { GqlAuthGuard } from 'src/auth/authGuard';
import { ProductsService } from 'src/products/products.service';

@Resolver('ProductsUser')
export class ProductsUsersResolver {
  constructor(
    private readonly productsService: ProductsService,
    private readonly productsUsersService: ProductsUsersService
  ) {}

  @Mutation('buyProduct')
  create(
    @Args('createProductsUserInput')
    createProductsUserInput: CreateProductsUserInput
  ) {
    return this.productsUsersService.create(createProductsUserInput);
  }

  @UseGuards(GqlAuthGuard)
  @Query('productsByUser')
  async productsByUser(@Args('userId') userId: string) {
    const allProductIdsEntries = await this.productsUsersService.findAll(
      userId
    );
    const allProds = await Promise.all(
      (allProductIdsEntries ?? []).map(async (product) => {
        return this.productsService.findById(product?.productId);
      })
    );

    return allProds;
  }
}

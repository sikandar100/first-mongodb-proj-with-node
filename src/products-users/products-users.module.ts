import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductsUsersService } from './products-users.service';
import { ProductsUsersResolver } from './products-users.resolver';
import { UserProducts, UserProductsSchema } from './products-users.schema';

import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserProducts.name, schema: UserProductsSchema }
    ]),
    ProductsModule
  ],
  providers: [ProductsUsersResolver, ProductsUsersService],
  exports: [ProductsUsersService]
})
export class ProductsUsersModule {}

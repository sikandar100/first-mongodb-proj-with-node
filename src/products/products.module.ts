import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { Product, ProductSchema } from './products.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])
  ],
  providers: [ProductsResolver, ProductsService],
  exports: [ProductsService]
})
export class ProductsModule {}

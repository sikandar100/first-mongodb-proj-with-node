import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Product } from './products.schema';
import { CreateProductInput } from './dto/create-product.input';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>
  ) {}

  create(createProductInput: CreateProductInput) {
    return this.productModel.create(createProductInput);
  }

  findAll() {
    return this.productModel.find().lean();
  }

  findById(prodId: string) {
    return this.productModel.findById({ _id: prodId });
  }
}

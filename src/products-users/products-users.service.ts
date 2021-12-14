import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { UserProducts } from './products-users.schema';
import { CreateProductsUserInput } from './dto/create-products-user.input';

@Injectable()
export class ProductsUsersService {
  constructor(
    @InjectModel(UserProducts.name)
    private userProductsModel: Model<UserProducts>
  ) {}

  create(createProductsUserInput: CreateProductsUserInput) {
    return this.userProductsModel.create(createProductsUserInput);
  }

  findAll(userId: string) {
    return this.userProductsModel.find({ userId });
  }
}

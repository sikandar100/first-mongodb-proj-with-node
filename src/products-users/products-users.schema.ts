import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

export const UserProductsSchema = new mongoose.Schema({
  productId: String,
  userId: String,
  quantity: Number
});

@ObjectType()
export class UserProducts extends Document {
  @Field()
  productId: string;

  @Field()
  userId: string;

  @Field()
  quantity: number;
}

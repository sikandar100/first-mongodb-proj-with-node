import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

export const ProductSchema = new mongoose.Schema({
  title: String,
  desc: String,
  price: Number
});

@ObjectType()
export class Product extends Document {
  @Field()
  title: string;

  @Field()
  desc: string;

  @Field()
  price: number;
}

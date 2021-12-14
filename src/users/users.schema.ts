import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

export const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

@ObjectType()
export class User extends Document {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}

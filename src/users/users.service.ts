import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { User } from './users.schema';
import { LoginInput } from './dto/login-user.input';
import { SignUpInput } from './dto/create-user.input';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  create(signUpInput: SignUpInput) {
    return this.userModel.create(signUpInput);
  }

  login(loginInput: LoginInput) {
    return this.userModel.findOne({ email: loginInput.email });
  }
}

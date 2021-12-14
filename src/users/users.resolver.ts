import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import jwt from 'jsonwebtoken';
import { compare, hash } from 'bcryptjs';

import { UsersService } from './users.service';
import { LoginInput } from './dto/login-user.input';
import { SignUpInput } from './dto/create-user.input';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation('signUp')
  async create(@Args('signUpInput') signUpInput: SignUpInput) {
    //password encryption before storing in database to make sure one of cyber security aspect
    signUpInput.password = await hash(signUpInput?.password, 13);
    return this.usersService.create(signUpInput);
  }

  @Query('login')
  async login(@Args('loginInput') loginInput: LoginInput) {
    const result = await this.usersService.login(loginInput);
    if (!result) {
      throw new Error('User Does Not Exist!');
    }

    const verify = await compare(loginInput?.password, result?.password);
    if (!verify) {
      throw new Error('Incorrect Password!');
    }

    //JWT token creation upon login (through correct credentials) for further validation and to avoid any data breach/change on network level for front-end
    const token = jwt.sign(
      {
        data: {
          id: result?.id,
          email: result?.email
        }
      },
      'bookrTest',
      { expiresIn: '7d' }
    );
    return token;
  }
}

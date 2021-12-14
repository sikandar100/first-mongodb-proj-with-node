import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { GqlAuthGuard } from './authGuard';
import { HttpStrategy } from './http.strategy';

import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'bearer' }),
    UsersModule
  ],
  providers: [HttpStrategy, GqlAuthGuard]
})
export class AuthModule {}

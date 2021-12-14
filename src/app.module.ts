import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { HttpStrategy } from './auth/http.strategy';
import { ProductsModule } from './products/products.module';
import { ProductsUsersModule } from './products-users/products-users.module';

require('dotenv').config();

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts')
      }
    }),
    MongooseModule.forRoot(`${process.env.URL}`),
    UsersModule,
    HttpStrategy,
    ProductsModule,
    ProductsUsersModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

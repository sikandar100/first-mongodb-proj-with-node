import jwt from 'jsonwebtoken';
import { Strategy } from 'passport-http-bearer';

import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class HttpStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super();
  }

  public async validate(token: string) {
    try {
      if (!token) {
        throw new UnauthorizedException();
      }

      const decoded: any = jwt.verify(token, 'bookrTest');
      const { id, email } = decoded.data;

      return { id, email };
    } catch (exception) {
      throw exception;
    }
  }
}

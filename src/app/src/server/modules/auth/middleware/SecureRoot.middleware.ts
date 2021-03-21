import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { AuthService } from 'Server/modules/auth/auth.service';

@Injectable()
export class SecureRootMiddleware implements NestMiddleware {
  constructor(private readonly authService: AuthService) {}

  async use(req: Request, res: Response, next: NextFunction): Promise<any> {
    const { session } = req;

    const accessToken = session['access_token'];

    if (!accessToken) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    if (!(await this.authService.isTokenValid(accessToken))) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    next();
  }
}

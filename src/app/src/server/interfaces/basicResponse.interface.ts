import { HttpStatus } from '@nestjs/common';

export default interface BasicResponseInterface {
  message: string;
  statusCode: HttpStatus;
}

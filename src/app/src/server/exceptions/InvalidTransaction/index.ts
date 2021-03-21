import { HttpException, HttpStatus } from '@nestjs/common';

export default class InvalidTransactionException extends HttpException {
  constructor(
    message = 'Error during transaction',
    statusCode: number = HttpStatus.BAD_REQUEST,
  ) {
    super(message, statusCode);
  }
}

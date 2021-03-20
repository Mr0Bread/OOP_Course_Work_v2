import { HttpException, HttpStatus } from '@nestjs/common';

export default class InvalidTransactionException extends HttpException {
  constructor(
    message: string = 'Error during transaction',
	statusCode: number = HttpStatus.BAD_REQUEST
  ) {
	super(message, statusCode);
  }
}

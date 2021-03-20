import BasicResponseInterface from 'Server/interfaces/basicResponse.interface';
import { HttpStatus } from '@nestjs/common';

export default class BasicResponse implements BasicResponseInterface {
  message: string;
  statusCode: HttpStatus;
}

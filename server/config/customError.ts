import { IStatusType } from '../types';

export class CustomError extends Error {
  data: IStatusType;
  constructor(data) {
    super(data.message);
    this.data = data;
  }
}

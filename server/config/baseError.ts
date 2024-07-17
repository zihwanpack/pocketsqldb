import { IStatusType } from '../types';

export class BaseError extends Error {
  data: IStatusType;

  constructor(data) {
    super(data.message);
    this.data = data;
  }
}

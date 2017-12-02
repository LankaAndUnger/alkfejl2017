import { User } from './user';
import { Vehicle } from './vehicle';

export class Rental {
  private _id: number;

  public constructor(
    private _user: User,
    private _vehicle: Vehicle,
    private _rentalStart: string,
    private _rentalEnd: string,
    private _rentalClose: string,
    private _amount: number
  ) {}

  get id(): number {
    return this._id;
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get vehicle(): Vehicle {
    return this._vehicle;
  }

  set vehicle(value: Vehicle) {
    this._vehicle = value;
  }

  get rentalStart(): string {
    return this._rentalStart;
  }

  set rentalStart(value: string) {
    this._rentalStart = value;
  }

  get rentalEnd(): string {
    return this._rentalEnd;
  }

  set rentalEnd(value: string) {
    this._rentalEnd = value;
  }

  get rentalClose(): string {
    return this._rentalClose;
  }

  set rentalClose(value: string) {
    this._rentalClose = value;
  }

  get amount(): number {
    return this._amount;
  }

  set amount(value: number) {
    this._amount = value;
  }
}

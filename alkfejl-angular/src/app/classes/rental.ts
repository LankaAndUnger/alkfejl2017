import { User } from './user';
import { Vehicle } from './vehicle';

export class Rental {
  public constructor(
    public  id: number,
    public user: User,
    public vehicle: Vehicle,
    public rentalStart: string,
    public rentalEnd: string,
    public rentalClose: string,
    public amount: number
  ) {}
}

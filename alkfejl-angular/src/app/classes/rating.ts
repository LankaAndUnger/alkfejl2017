export class Rating {
  private _id: number;

  public constructor(private _value: number) {
  }

  get id(): number {
    return this._id;
  }

  get value(): number {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
  }
}

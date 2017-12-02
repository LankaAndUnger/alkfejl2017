export class User {
    public constructor(
        public id: number,
        public username: string,
        public firstName: string,
        public lastName: string,
        public email: string,
        public address: string,
        public phoneNumber: string,
        public role: string
    ) {}
}

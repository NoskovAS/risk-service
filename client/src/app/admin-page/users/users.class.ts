import { IUsers } from './users.interface';

export class Users implements IUsers {
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    date: Date;

    constructor(firstname: string, lastname: string, username: string, email: string, date: Date) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.email = email;
        this.date = date;
    }
}

import { IUsers } from './users.interface';

export class Users implements IUsers {
    firstname: string;
    lastname: string;
    username: string;
    email: string;

    constructor(firstname: string, lastname: string, username: string, email: string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.email = email;
    }
}

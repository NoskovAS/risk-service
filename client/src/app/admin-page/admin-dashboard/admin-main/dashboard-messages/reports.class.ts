import { IReports } from './reports.interface';

export class Reports implements IReports {
    username: string;
    message: string;

    constructor(username: string, message: string,
        ) {

        this.username = username;
        this.message = message;
    }
}

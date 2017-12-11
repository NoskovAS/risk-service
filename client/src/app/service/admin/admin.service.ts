import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

@Injectable()
export class AdminService {
    public host: string;

    constructor(private http: Http,
        private router: Router) {
        this.host = environment.host;
    }

    authenticateAdmin(admin) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.host + 'admin/authenticate', admin, { headers: headers })
            .map(res => res.json());
    }

    getUsers() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.host + 'admin/getUsers', { headers: headers })
            .map(res => res.json());
    }

    deleteUser(user) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.host + 'admin/deleteUser', user, { headers: headers })
            .map(res => res.json());
    }

    sendReport(reportMessage) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.host + 'admin/getReport', reportMessage, { headers: headers })
            .map(res => res.json());
    }

    getReports() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.host + 'admin/getReports', { headers: headers })
            .map(res => res.json());
    }

}

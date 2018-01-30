import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

@Injectable()
export class RiskListService {
    risk: any;
    user: any;
    public host: string;

    constructor(private http: Http,
        private router: Router) {
        this.host = environment.host;
    }

    addingRisk(risk: object): any {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.host + 'risks/addRisk', risk, { headers: headers })
            .map(res => res.json());
    }

    getRisks(user: object): any {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.host + 'risks/getRisk', user, { headers: headers })
            .map(res => res.json());
    }

    deleteRisk(SerialNumber: object): any {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.host + 'risks/deleteRisk', SerialNumber, { headers: headers })
            .map(res => res.json());
    }

    clearTable(user: object): any {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.host + 'risks/clearTable', user, { headers: headers });
    }

    getUsername(): string {
        return localStorage.getItem('username');
    }
}

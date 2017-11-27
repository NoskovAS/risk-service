import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class RiskListService {
    risk: any;
    user: any;

    constructor(private http: Http,
                private router: Router) { }

    addingRisk(risk) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/risks/table', risk, {headers: headers})
            .map(res => res.json());
    }

    getRisks(user) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/risks/getRisk', user, {headers: headers})
            .map(res => res.json());
    }

    deleteRisk(SerialNumber) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/risks/deleteRisk', SerialNumber, {headers: headers})
            .map(res => res.json());
    }

    clearTable(user) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/risks/clearTable', user, {headers: headers});
    }

    getUsername() {
        return localStorage.getItem('username');
    }
}

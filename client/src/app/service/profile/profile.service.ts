import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

@Injectable()
export class ProfileService {
    authToken: any;
    public host: string;

    constructor(private http: Http,
                private router: Router) {
        this.host = environment.host;
    }

    profileChanges(user) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.host + 'users/editProfile', user, { headers: headers })
            .map(res => res.json());
    }

    editPassword(user) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.host + 'users/editPassword', user, { headers: headers })
            .map(res => res.json());
    }

    getProfile() {
        const headers = new Headers();
        this.loadToken();
        headers.append('authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.host + 'users/profile', { headers: headers })
            .map(res => res.json());
    }

    deleteUser(user) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.host + 'users/deleteUser', user, { headers: headers })
            .map(res => res.json());
    }

    loadToken() {
        const token = localStorage.getItem('id_token');
        this.authToken = token;
    }


}

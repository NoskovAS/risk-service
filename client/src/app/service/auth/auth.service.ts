import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {
    authToken: any;
    user: any;
    risk: any;

    constructor(private http: Http,
                private router: Router) { }

    registerUser(user) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
            .map(res => res.json());
    }

    authenticateUser(user) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers})
            .map(res => res.json());
    }

    loggedIn() {
        return localStorage.getItem('user');
    }

    storeUserData(token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }

    logout() {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }
}

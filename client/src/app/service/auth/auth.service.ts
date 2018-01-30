import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
    authToken: string;
    user: object;
    public host: string;

    constructor(private http: Http) {
        this.host = environment.host;
    }

    registerUser(user: object): any {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.host + 'users/register', user, { headers: headers })
            .map(res => res.json());
    }

    authenticateUser(user: object): any {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.host + 'users/authenticate', user, { headers: headers })
            .map(res => res.json());
    }

    getSocialData(social: string): any {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.host + 'users/' + social, { headers: headers } )
            .map(res => res.json());
    }

    loggedIn(): string {
        return localStorage.getItem('user');
    }

    storeUserData(token: string, user: any): any {
        if ((token !== undefined) || (token !== null)) {
            localStorage.setItem('id_token', token);
            this.authToken = token;
        }
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('username', user.username);
        localStorage.setItem('uid', user.uid);
        this.user = user;
    }

    logout(): any {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }
}

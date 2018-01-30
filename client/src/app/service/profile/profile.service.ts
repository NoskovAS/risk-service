import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router} from '@angular/router';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

@Injectable()
export class ProfileService {
    authToken: string;
    public host: string;

    constructor(private http: Http,
                private router: Router) {
        this.host = environment.host;
    }

    profileChanges(user: object) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.host + 'users/editProfile', user, { headers: headers })
            .map(res => res.json());
    }

    editPassword(user: object): any {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.host + 'users/editPassword', user, { headers: headers })
            .map(res => res.json());
    }

    addPassword(user: object): any {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.host + 'users/addPassword', user, { headers: headers })
            .map(res => res.json());
    }

    getProfile(): any {
        const headers = new Headers();
        this.loadToken();
        headers.append('authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.host + 'users/profile', { headers: headers })
            .map(res => res.json());
    }

    deleteUser(user: object): any {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.host + 'users/deleteUser', user, { headers: headers })
            .map(res => res.json());
    }

    loadToken(): any {
        const token: string = localStorage.getItem('id_token');
        this.authToken = token;
    }

}

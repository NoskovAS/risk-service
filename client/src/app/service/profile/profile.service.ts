import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {
    authToken: any;

    constructor(private http: Http,
                private router: Router) { }

    profileChanges(user) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/editProfile', user, {headers: headers})
            .map(res => res.json());
    }

    editPassword(user) {
        console.log(user);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/editPassword', user, {headers: headers})
            .map(res => res.json());
    }

    getProfile() {
        const headers = new Headers();
        this.loadToken();
        headers.append('authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/profile', {headers: headers})
            .map(res => res.json());
    }

    loadToken() {
        const token = localStorage.getItem('id_token');
        this.authToken = token;
    }


}

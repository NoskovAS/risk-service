import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminService {

  constructor(private http: Http,
    private router: Router) { }

  authenticateAdmin(admin) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/admin/authenticate', admin, { headers: headers })
      .map(res => res.json());
  }

  getUsers() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/admin/getUsers', { headers: headers })
      .map(res => res.json());
  }

  deleteUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/admin/deleteUser', user, { headers: headers })
      .map(res => res.json());
  }

}

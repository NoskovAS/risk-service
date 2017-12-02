import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Headers } from '@angular/http';

@Injectable()
export class FooterService {
  visible: boolean;
  public host: string;

  constructor(private http: Http) {
    this.visible = true;
    this.host = environment.host;
  }

  hide() { this.visible = false; }

  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }

  sendReport() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.host + 'admin/getReport', { headers: headers })
      .map(res => res.json());
  }

}

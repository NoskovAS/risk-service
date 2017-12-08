import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-facebook-auth',
  templateUrl: './facebook-auth.component.html',
  styleUrls: ['./facebook-auth.component.css']
})
export class FacebookAuthComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.facebookAuth();
  }

  facebookAuth() {
    this.authService.facebookGetData().subscribe(data => {
      console.log('ROBOTAET: data: ' + data.email);
     /*  window.close(); */
      if (data.success) {
        console.log('!! ROBOTAET ATATATTATATA: ' + data);
        /* this.logSuccess = true; */
        this.router.navigate(['admin']); // table
      }
    });
  }

}

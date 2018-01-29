import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../service/auth/auth.service';
import { NavbarService } from '../../../service/navbar/navbar.service';
import { FooterService } from '../../../service/footer/footer.service';

@Component({
  selector: 'app-social-auth',
  templateUrl: './social-auth.component.html',
  styleUrls: ['./social-auth.component.css']
})
export class SocialAuthComponent implements OnInit, OnDestroy {
  socialRoute: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private ar: ActivatedRoute,
    private navbarService: NavbarService,
    private footerService: FooterService
  ) {
    ar.params.subscribe((param) => {
      this.socialRoute = param['id'];
    });
  }

  ngOnInit() {
    switch (this.socialRoute) {
      case 'facebookAuth': {
        this.getSocialData('getFacebookData');
        break;
      }
      case 'googleAuth': {
        this.getSocialData('getGoogleData');
        break;
      }
      case 'githubAuth': {
        this.getSocialData('getGithubData');
        break;
      }
      default: {
        this.router.navigate['**'];
      }
    }
    this.navbarService.hide();
    this.footerService.hide();
  }

  ngOnDestroy() {
    this.navbarService.show();
    this.footerService.show();
  }

  getSocialData(social: string) {
    console.log('Data Success! ::::' + 'getSocialData' + ' ');
    this.authService.getSocialData(social).subscribe(data => {
      if (data.success) {
        if (data.facebookUser) {
          this.authService.storeUserData(null, data.facebookUser);
          localStorage.setItem('username', data.facebookUser.username);
          localStorage.setItem('social', 'true');
          this.router.navigate(['risk-list/table']);
        }
        if (data.googleUser) {
          this.authService.storeUserData(null, data.googleUser);
          localStorage.setItem('username', data.googleUser.username);
          localStorage.setItem('social', 'true');
          this.router.navigate(['risk-list/table']);
        }
        if (data.githubUser) {
          this.authService.storeUserData(null, data.githubUser);
          localStorage.setItem('username', data.githubUser.username);
          localStorage.setItem('social', 'true');
          this.router.navigate(['risk-list/table']);
        }
      }
    });
  }
}

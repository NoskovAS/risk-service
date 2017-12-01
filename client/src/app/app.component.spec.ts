import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SharedModule } from './share/shared.module';
import { RiskListModule } from './risk-list/risk-list.module';
import { AdminPageModule } from './admin-page/admin-page.module';
import { LoaderComponent } from './share/loader/loader.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './service/auth/auth.service';
import { HttpModule } from '@angular/http';
import { NavbarService } from './service/navbar/navbar.service';
import { FooterService } from './service/footer/footer.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpModule],
      declarations: [
        AppComponent,
        LoaderComponent,
        NavbarComponent,
        FooterComponent
      ],
      providers: [
        SharedModule,
        RiskListModule,
        AdminPageModule,
        AppRoutingModule,
        AuthService,
        NavbarService,
        FooterService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  xit(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  xit('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});

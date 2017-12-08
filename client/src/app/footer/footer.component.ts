import { Component, OnInit } from '@angular/core';
import { FooterService } from '../service/footer/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  location: Location;
  githubLink: string = 'https://github.com/NoskovAS/risk-service';
  linkedinLink: string = 'https://vk.com/id42949302';


  constructor(public footerService: FooterService) {}

  ngOnInit() {
  }

  repository() {
    window.location.href = this.githubLink;
  }

  linkedin() {
    window.location.href = this.linkedinLink;
  }

}

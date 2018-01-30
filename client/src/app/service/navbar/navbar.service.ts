import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {
  visible: boolean;

    constructor() { this.visible = true; }

    hide(): any { this.visible = false; }

    show(): any { this.visible = true; }

    toggle(): any { this.visible = !this.visible; }

}

import { Directive, Output, HostListener, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appFocusOut]'
})
export class FocusOutDirective {
  @Output() onFocusOut: EventEmitter<boolean> = new EventEmitter<false>();

  @HostListener('focusout', ['$event'])

  public onListenerTriggered (event: any): void {
    this.onFocusOut.emit(true);
  }


}

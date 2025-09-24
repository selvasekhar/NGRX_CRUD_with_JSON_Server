import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appdisable]',
  standalone:true
})
export class NumberDirective {
  constructor() {}

  // @HostListener('document:copy')
  // onCopy(event: ClipboardEvent) {
  //   event.preventDefault();
  // }
}

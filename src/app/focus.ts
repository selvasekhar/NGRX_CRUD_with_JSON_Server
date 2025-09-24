import { AfterViewInit, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFocus]',
})
export class focus implements AfterViewInit {

  readonly acceptkeys = ['0','1','2','3','4','5','6','7','8','9','10', "!"]
  constructor(private el: ElementRef) {}

  @HostListener('keydown', ['$event']) down(e:any){
    if(!this.acceptkeys.includes(e.key)){
      e.preventDefault();
    }
  }

  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }

  // @HostListener('document:copy')
  // onCopy(event: ClipboardEvent):void {
  //   event.preventDefault();
  // }
}

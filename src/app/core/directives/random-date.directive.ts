import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRandomDate]'
})
export class RandomDateDirective  {
  htmlElement: ElementRef<HTMLElement>;
  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit() {    
    const rangeOfDays=30;
    const startHour=1;
    const hourRange=10;
    var today = new Date(Date.now());
    this.htmlElement.nativeElement.innerHTML=(new Date(1980,today.getMonth(), today.getDate()+Math.random() *rangeOfDays, Math.random()*hourRange + startHour, Math.random()*60)).toUTCString().toString() ;           
  }  
}

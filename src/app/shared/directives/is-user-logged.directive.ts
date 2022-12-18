import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appIsLogged]'
})
export class IsUserLoggedDirective {

  @Input() set appIsLogged(isLogged:boolean){
    if(!isLogged){
      this.elementRef.nativeElement.style.display = 'none';
    }
    else{
      this.elementRef.nativeElement.style.display = 'block';
    }
  }

  constructor(private elementRef:ElementRef) { }
}

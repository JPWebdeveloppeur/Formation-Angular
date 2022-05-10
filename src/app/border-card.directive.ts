import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

    private InitialColor : string = '#f5f5f5';
    private defaultColor:  string = '#009688';
    private defaultHeight: number = 180;

  constructor(private el: ElementRef) {
      this.setHeight(this.defaultHeight);
      this.setBorder(this.InitialColor);
  }

  @Input('pkmnBorderCard') borderColor :string

  @HostListener('mouseenter') onMouseEnter(){
      this.setBorder( this.borderColor ||this.defaultColor);
  }

    @HostListener('mouseleave') onMouseLeave(){
        this.setBorder(this.InitialColor);
    }

  setHeight(height: number){
      this.el.nativeElement.style.height = `${height}px`
  }

  setBorder(color: string){
      this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
}

import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCardEffect]',
})
export class CardEffect {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.2s ease');
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.05)');
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
  }
}

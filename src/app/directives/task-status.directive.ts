import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTaskStatus]'
})
export class TaskStatusDirective {
  @Input() appTaskStatus: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.appTaskStatus) {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'green');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    }
  }
}

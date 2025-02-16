import { TaskStatusDirective } from './task-status.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('TaskStatusDirective', () => {
  it('should create an instance', () => {
    
    const mockElementRef = { nativeElement: {} } as ElementRef;
    const mockRenderer = { setStyle: jasmine.createSpy('setStyle') } as unknown as Renderer2;

    const directive = new TaskStatusDirective(mockElementRef, mockRenderer);
    expect(directive).toBeTruthy();
  });
});

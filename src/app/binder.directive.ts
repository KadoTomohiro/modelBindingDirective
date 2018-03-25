import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[appBinder]',
})
export class BinderDirective {

  @Input() appBinder: string;
  @Output() appBinderChange: EventEmitter<string>;

  constructor() {
    this.appBinderChange = new EventEmitter<string>();
  }

  @HostListener('click') updateTimestamp(): void {
    const timestamp = new Date();
    console.log('clicked', timestamp.toString());
    this.appBinderChange.emit(timestamp.toString());
  }
}

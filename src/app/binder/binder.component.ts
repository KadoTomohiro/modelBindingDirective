import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-binder',
  templateUrl: './binder.component.html',
  styleUrls: ['./binder.component.css']
})
export class BinderComponent implements OnInit {

  @Input() model: string;
  @Output() modelChange: EventEmitter<string>;
  constructor() {
    this.modelChange = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  onClick() {
    const timestamp = new Date();
    console.log('component clicked', timestamp.toString());
    this.modelChange.emit(timestamp.toString());
  }
}

import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-loaction',
  templateUrl: './loaction.component.html',
  styleUrls: ['./loaction.component.css']
})
export class LoactionComponent implements OnInit {
  @Output() parentfunnnn : EventEmitter<any> =new EventEmitter();
  constructor() { }

  @Input() hero: any;

  ngOnInit(): void {
    this.parentfunnnn.emit('VVVVVVVVVVVVVVVV')
  }

}
function output() {
  throw new Error('Function not implemented.');
}


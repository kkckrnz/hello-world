import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// Be careful here, because EventEmitter is automatically imported from protractor and that gives me an error.
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  // @Input() public parentData;
  // Or this can be done using alias
  @Input('parentData') public name;

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  fireEvent() {
    this.childEvent.emit("Hey this is a message from child component");
  }
}

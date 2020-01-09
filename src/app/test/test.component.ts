import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "Ken";
  public greeting = "";

  constructor() { }

  ngOnInit() {
  }

  onClick(event) {
    console.log(event);
    this.greeting = 'Welcome to Angular tutorial';
  }
    
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "Ken";
  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    "text-sepcial": this.isSpecial,
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    
  }

  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return "Hello " + this.name;
  }
    
}

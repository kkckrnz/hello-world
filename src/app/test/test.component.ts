import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = 'Dunedin';
  public message = 'Welcome to Dunedin';
  public person = {
    firstName: 'Ken',
    lastName: 'Choi',
  };
  public date = new Date();

  constructor() { }

  ngOnInit() {
  }

}

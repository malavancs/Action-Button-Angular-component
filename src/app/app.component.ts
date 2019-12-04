import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular';
  options: any;
  ngOnInit() {
    this.options = [ {
      background: "green",
      color: "green",
      icon: "fa fa-check-square",
      label: "Approve",
      value: 1,
    }, {
      background: "brown",
      color: "brown",
      icon: "fa fa-square",
      label: "Ignore",
      value: 1,
    }];
  }
  onChanged(i) {
    console.log("malavan", i);
  }
}

import { Component, OnInit,Input,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css']
})

export class ActionButtonComponent implements OnInit {
  @Input() buttons:{label:string,color:string,icon:string,value,background:string}[];
  @Output() change: EventEmitter<any> = new EventEmitter();
  selectedIndex: number;
  constructor() { }

  ngOnInit() {
    this.selectedIndex = 0;
  }
changeButton(){
  if(this.buttons.length === (this.selectedIndex+1)) {
    this.selectedIndex = 0;
  } else {
    this.selectedIndex++;
  }
  this.change.emit(this.buttons[this.selectedIndex]);

}
}
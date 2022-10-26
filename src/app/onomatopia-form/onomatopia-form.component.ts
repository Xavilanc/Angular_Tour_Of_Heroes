import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-onomatopia-form',
  templateUrl: './onomatopia-form.component.html',
  styleUrls: ['./onomatopia-form.component.css']
})
export class OnomatopiaFormComponent implements OnInit {

  newOnomatopia: string = "";

  @Output()
  sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter();

  CreateOnomatopia(): void {
    this.sendOnomatopiaToParent.emit(this.newOnomatopia);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onomatopia',
  templateUrl: './onomatopia.component.html',
  styleUrls: ['./onomatopia.component.css']
})
export class OnomatopiaComponent implements OnInit {
  
  onomatopiaList: String[] = [];

  addOnomatopia(newOnomatopia: String) {
    this.onomatopiaList.push(newOnomatopia);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

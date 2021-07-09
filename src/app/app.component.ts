import { Component } from '@angular/core';
import { Employee } from './employee';
import { Child, Parent } from './parent';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* a = { name: 'Groucho', sibling: '' };
  b = { name: 'Harpo', sibling: this.a };
  parent: Parent;
  child: Child;
  */
  employees: Employee[] = [
    { id: 1, name: 'Ram', salary: 5000 },
    { id: 2, name: 'John', salary: 1000 },
    { id: 3, name: 'Franc', salary: 3000 },
    { id: 4, name: 'Andrew ', salary: 8000 }
  ];
  constructor() {
    /* this.child = { name: 'ram', parent: this.parent };
    this.parent = { id: 1, child: this.child };*/
  }

  ngOnInit() {}
}

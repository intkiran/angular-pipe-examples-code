import { Component, OnInit } from '@angular/core';
import { Employee } from '../app/employee';

@Component({
  selector: 'app-multiple-directive',
  templateUrl: './multiple-directive.component.html',
  styleUrls: ['./multiple-directive.component.css']
})
export class MultipleDirectiveComponent implements OnInit {
  public hide: boolean = false;
  showTable() {
    this.hide = !this.hide;
  }

  employees: Employee[] = [
    { id: 1, name: 'Ram', salary: 5000 },
    { id: 2, name: 'John', salary: 1000 },
    { id: 3, name: 'Franc', salary: 3000 },
    { id: 4, name: 'Andrew ', salary: 8000 }
  ];
  constructor() {}

  ngOnInit() {}
}

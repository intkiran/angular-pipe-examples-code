import { Component, OnInit } from '@angular/core';
import { Employee } from '../app/employee';

@Component({
  selector: 'app-namepipe-table',
  templateUrl: './namepipe-table.component.html',
  styleUrls: ['./namepipe-table.component.css']
})
export class NamepipeTableComponent implements OnInit {
  constructor() {}
  employees: Employee[] = [
    {
      id: 1,
      name: 'John',
      salutation: 'Mr',
      firstName: 'fram',
      middleName: 'mram',
      lastName: 'fram',
      salary: 5000
    },
    {
      id: 2,
      name: 'John',
      salutation: 'Mr',
      firstName: 'fram',
      middleName: 'mram',
      lastName: 'fram',
      salary: 1000
    },
    {
      id: 3,
      name: 'Franc',
      salutation: 'Mr',
      firstName: 'fram',
      middleName: 'mram',
      lastName: 'fram',
      salary: 3000
    },
    {
      id: 4,
      name: 'Andrew ',
      salutation: 'Mr',
      firstName: 'fram',
      middleName: 'mram',
      lastName: 'fram',
      salary: 8000
    }
  ];
  ngOnInit() {}
}

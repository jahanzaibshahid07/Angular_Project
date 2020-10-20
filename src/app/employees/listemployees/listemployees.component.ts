import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  templateUrl: './listemployees.component.html',
  styleUrls: ['./listemployees.component.css']
})
export class ListemployeesComponent implements OnInit {

  employees:Employee[] = [
    {
      id: 1,
      name: "jahanzaib",
      gender: "male",
      email: "jahanzaibshahid@gmal.com",
      contactpreference: "Email",
      dateofbirth: new Date('12/23/1997'),
      department: "IT",
      isactive: true,
      photopath: "assets/images/jb.jpg",
    },
    {
      id: 2,
      name: "ubaid",
      gender: "female",
      phonenumber: 3060290233,
      contactpreference: "Phone",
      dateofbirth: new Date('02/13/1994'),
      department: "HR",
      isactive: false,
      photopath: "assets/images/pp.jpg",
    },
    {
      id: 3,
      name: "shani",
      gender: "male",
      phonenumber: 3060290233,
      contactpreference: "Phone",
      dateofbirth: new Date('12/30/1999'),
      department: "SQA",
      isactive: true,
      photopath: "assets/images/jb.jpg",
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}

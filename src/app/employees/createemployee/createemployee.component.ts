import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from 'src/app/models/department.model';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {

  name:any = "";
  email:any = "";
  phone:any = "";
  contactpreference = "";
  gender:any = "";
  isactive:boolean = false;
  department: string = "";
  departments: Department[] = [
    {id : 1 , name : 'HR'},
    {id : 2 , name : 'IT'},
    {id : 3 , name : 'SQA'},
    {id : 4 , name : 'DOCTOR'},
    {id : 5 , name : 'DATABASE'}
  ]

  constructor() { }

  ngOnInit(): void {
  }


  saveEmployee(employee : NgForm): void
  {
    console.log(employee.value);
  }

}

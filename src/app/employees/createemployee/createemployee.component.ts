import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from 'src/app/models/department.model';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker'

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
  dob : any = "";
  department: string = "";
  departments: Department[] = [
    {id : 1 , name : 'HR'},
    {id : 2 , name : 'IT'},
    {id : 3 , name : 'SQA'},
    {id : 4 , name : 'DOCTOR'},
    {id : 5 , name : 'DATABASE'}
  ]

  photopath:any = "";
  previewphoto:boolean = false;

  datebsconfig : Partial<BsDatepickerConfig>;

  constructor() {
    this.datebsconfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      showWeekNumbers: false,
      dateInputFormat: 'DD/MM/YYYY'
    });
   }

  ngOnInit(): void {
  }

  ontogglepreview()
  {
      return this.previewphoto = ! this.previewphoto;
  }

  saveEmployee(employee : NgForm): void
  {
    console.log(employee.value);
  }

}

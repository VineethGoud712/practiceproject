import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee:Employee = new Employee();
  constructor(private ApiService:ApiService,private ToastrService:ToastrService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.employee)
    
    this.ApiService.postEmploye(this.employee).subscribe(res=>{
      if(res){
        this.ToastrService.success('Success','Created successfully');
        this.employee.firstName= '';
        this.employee.lastName= '';
        this.employee.emailId = ''
        this.goToEmployeeList();
      }
    },err=>{
      this.ToastrService.error('Error','Unable to create employee');
    })
  }


  goToEmployeeList(){
    this.router.navigate(['/emplList']);
  }

  allowOnlyChar(event:any){
     if(event.keyCode === 32 || event.keyCode === 189){
         event.preventDefault();
     }

     if(event.charCode !== 46){
      
     }

  }

}

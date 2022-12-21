import { ToastrService } from 'ngx-toastr';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee:Employee = new Employee();
  constructor(private route:ActivatedRoute,private ApiService:ApiService,private routes:Router,private ToastrService:ToastrService) { }

  updateEmp:any;
   id = this.route.snapshot.params['id'];
  ngOnInit(): void {

    
    if(this.id){
      this.ApiService.getEmployeeById(this.id).subscribe(res=>{
        this.updateEmp = res;
        this.employee.firstName = this.updateEmp.firstName;
        this.employee.lastName = this.updateEmp.lastName;
        this.employee.emailId = this.updateEmp.emailId;
      });
    }
  }

  onSubmit(){
    
    this.ApiService.updateEmp(this.employee,this.id).subscribe(res=>{
      if(res){
        this.ToastrService.success('Updated succesfully');
        this.routes.navigate(['/emplList']);
      }
    })
  }
}

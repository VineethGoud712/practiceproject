import { WhosaleapiService } from './../whosaleapi.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeejob-ap',
  templateUrl: './employeejob-ap.component.html',
  styleUrls: ['./employeejob-ap.component.css']
})
export class EmployeejobApComponent implements OnInit {

  constructor(private toast:ToastrService,private service:WhosaleapiService) { }

  empId:any;
  firstName:any;
  middleName:any;
  lastName:any;
  role:any;
  phone:any;
  city:any;
  street:any;
  state:any;
  postalCode:any;
  ngOnInit(): void {
  }

  saveDetails(){
   
    if(this.empId == '' || this.empId == undefined){
     
      this.toast.warning('Please Enter Employee ID','WARNING');
    }else  if(this.firstName == '' || this.firstName == undefined){
      this.toast.warning('Please Enter First Name','WARNING');
    }else  if(this.middleName == '' || this.middleName == undefined){
      this.toast.warning('Please Enter Middle Name','WARNING');
    }else  if(this.lastName == '' || this.lastName == undefined){
      this.toast.warning('Please Enter Last Name','WARNING');
    }else  if(this.role == '' || this.role == undefined){
      this.toast.warning('Please Enter Role','WARNING');
    }else  if(this.phone == '' || this.phone == undefined){
      this.toast.warning('Please Enter Telephone','WARNING');
    }else  if(this.city == '' || this.city == undefined){
      this.toast.warning('Please Enter City','WARNING');
    }else  if(this.street == '' || this.street == undefined){
      this.toast.warning('Please Enter Street','WARNING');
    }else  if(this.state == '' || this.state == undefined){
      this.toast.warning('Please Enter State','WARNING');
    }else  if(this.postalCode == '' || this.postalCode == undefined){
      this.toast.warning('Please Enter Postal Code','WARNING');
    }else{
      const params = {
        empId :this.empId,
        firstName : this.firstName,
        middleName :this.middleName,
        lastName : this.lastName,
        role:this.role,
        phone:this.phone,
        city:this.city,
        street:this.street,
        state:this.state,
        postacode:this.postalCode
      }

      this.service.saveEmployee(params).subscribe(data=>{
        console.log(JSON.stringify(data));
        
      })
    }
  }


}

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ApiService } from './../api.service';
import { Employee } from './../employee-management/employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css']
})
export class EmployeListComponent implements OnInit {
  p: number = 1;
  employees:Employee[] | undefined;
  constructor(private ApiService:ApiService,private route:Router,private ToastrService:ToastrService) { }

  ngOnInit(): void {

    this.getAllEmployees();
    
  }

  allempData:any;
  AllempKeys:any = [];
  AllempValues:any = [];
  getAllEmployees(){
    this.ApiService.getAllEmployee().subscribe(res=>{
      this.allempData = res;
      this.allempData.forEach((element:any) => {
        this.AllempKeys = Object.keys(element);
         
          // console.log("==keys==" +  this.AllempKeys);
          this.AllempValues.push(Object.values(element));
          // console.log("values === " + this.AllempValues)
          // console.log("elements==" + element)
      });

    })
  }

  details(values:any){
       console.log(values);
       this.route.navigate(['/employee/'+ values[0]]);

  }

  deleteEmp(val:any){
    let id = val[0];
      this.ApiService.DropEmployee(id).subscribe(res => {
        console.log(res);
        if(res){
          this.ToastrService.success('Deleted successfully');
          // this.ngOnInit();
          window.location.reload();
        }else{
          this.ToastrService.error('Some thing went worng');
        }
      })


  }

  update(values:any){
    this.route.navigate(['/update/'+ values[0]])
  }

}

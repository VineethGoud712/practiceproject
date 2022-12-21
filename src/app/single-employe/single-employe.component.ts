import { ApiService } from './../api.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-employe',
  templateUrl: './single-employe.component.html',
  styleUrls: ['./single-employe.component.css']
})
export class SingleEmployeComponent implements OnInit {

  constructor(private route:ActivatedRoute,private ApiService:ApiService) { }

  employee:any = [];
  tabKeys:any =[];
  tabvalues:any = [];
  ngOnInit(): void {

    let id = this.route.snapshot.params['id'];
      console.log(id);
    if(id){
       this.ApiService.getEmployeeById(id).subscribe(res=>{
          this.employee.push(res);
         
          this.employee.forEach((element:any) => {
            this.tabKeys = Object.keys(element);
            this.tabvalues.push(Object.values(element));
          });
          
       })
    }
  }

}

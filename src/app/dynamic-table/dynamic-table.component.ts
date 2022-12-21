import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {

  constructor(private ApiService:ApiService) { }

  ngOnInit(): void {
    this.getData();
  }
data:any =[];
arrayKey:any = [];
arrayValues:any =[];
arrayValues2:any =[];

  getData(){
    this.ApiService.getApidata().subscribe(res=>{
      this.data = res;
      this.data.forEach((element:any) => {
        this.arrayKey = Object.keys(element).reverse();
     
        this.arrayValues.push(Object.values(element).reverse());
       
        console.log(this.arrayValues);
        console.log(Object.keys(element));
      });
      console.log(res);
    })
  }

}

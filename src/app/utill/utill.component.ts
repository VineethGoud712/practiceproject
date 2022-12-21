import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-utill',
  templateUrl: './utill.component.html',
  styleUrls: ['./utill.component.css']
})
export class UtillComponent implements OnInit {

  constructor(private apiService:ApiService,private shared :SharedService) { }

  ngOnInit(): void {
    this.apiService.getApidata().subscribe(data=>{
      console.table(data);
      this.shared.setSharedData(data);
    })

  }

}

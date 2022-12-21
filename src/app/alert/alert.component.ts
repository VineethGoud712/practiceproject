import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit ,OnDestroy{

  constructor() { }
date:any;
  ngOnInit(): void {
  this.date = new Date();
   
  }

  ngOnDestroy(): void {
   
  
  }

  

}

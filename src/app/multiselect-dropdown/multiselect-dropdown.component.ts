import { Component, OnInit, ViewChild, ElementRef, ComponentRef, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { SharedComponent } from '../shared/shared.component';

@Component({
  selector: 'app-multiselect-dropdown',
  templateUrl: './multiselect-dropdown.component.html',
  styleUrls: ['./multiselect-dropdown.component.css']
})
export class MultiselectDropdownComponent implements OnInit,AfterViewInit{

  @ViewChild('viewChild', { static: false })view!:SharedComponent;
  
  public salesproducts = [
    // {name:'Iphone',price:'100000'},
    // {name:'Sofa',price:'10000'},
    // {name:'fridge',price:'10000'},
    // {name:'Bed',price:'20000'}
  ];

  constructor() { }
 showloader:any;
  ngOnInit(): void {
    this.showloader = true; 
  }

 ngAfterViewInit(){
   this.showloader =false;
 }


  inc(){
   this.view.increment();
  }

  dec(){
  this.view.decrement();
  }

  child:String =  '';
  myFun(val:any){
   this.child = val; 
  }


}

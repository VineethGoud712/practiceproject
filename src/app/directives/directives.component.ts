import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  @Input()pf:String='';

  @Output()
  notify:EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  login:boolean =false;
  users:any;
  selectedName:any;
  ngOnInit(): void {
   this.users = [
    {id:101,name:"vineeth",role:'Fullstack'},
    {id:102,name:"teja",role:'Web-developer1'},
    {id:103,name:"harika",role:'Web-developer2'}
   ]
    
  }
  choice(val:any){
     this.selectedName = val.value;
  }

  passData(){
    this.notify.emit(10);
  }

 date = new Date();

}

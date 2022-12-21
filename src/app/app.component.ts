import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name:String = "deepak";
  profile:String = "vineeth";

  username:String = ''
  title = 'Practice';
  img:String = "./assets/img/Sm1.jpg";
  btnstatus:boolean = false;

  change(){
    this.title = 'vineeth';
  }

  childData:any;
  parentMethod(data:any){
    this.childData = data;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-includes-item',
  templateUrl: './includes-item.component.html',
  styleUrls: ['./includes-item.component.css']
})
export class IncludesItemComponent implements OnInit {

  constructor() { }

  name:any;
  class:any

  ngOnInit(): void {
    this.Data();
  }

  items:any;
  Data(){
    this.items = [
      {
        name:'A',
        class:2
      },
      {
        name:'B',
        class:3
      },
      {
        name:'C',
        class:2
      }
    ]
  }

  add(){
   
    const savedata = {
      name:this.name,
      class:this.class
    }
    console.log(this.items.includes(this.name));
      console.log(this.items[0].name)

      if(this.items.length>0){
        let count =0;
       
        for(let i =0;i<this.items.length;i++){
          
          console.log(this.items[i].name + "==" + this.name +"====="+ this.items[i].class + "=== " + this.class)
          console.log(this.items[i].name == this.name );
          console.log(this.items[i].class == this.class);
          if(this.items[i].name == this.name && this.items[i].class == this.class){
          
            count++;
            console.log(count)
          }
         
  
        }
        console.log("count value == " + count)
        if(count>0){
          console.log(" 0 > " + count)
          alert("Item already exist");
          this.name = '';
          this.class = '';
          
        
        }else{
          this.items.push(savedata);
        
        }

      }else{
        this.items.push(savedata);
       
      }
     
 
  
  }

  reset(val:any,i:any){
    console.log(val);
    this.name = i.name;
    this.class =i.class;
  }

}

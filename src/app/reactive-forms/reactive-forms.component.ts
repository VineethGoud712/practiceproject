import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  constructor() { }
loginForm:any;
data:any;
  ngOnInit(): void {
this.data = "vineeth";
    this.loginForm = new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')])
    })
   

  }

  parentfunnnn(data:any){
   console.log(data);
   
  }

  loginUser(){
    console.log(this.loginForm);
    console.log(this.loginForm.value);
    console.log(this.loginForm.get('email').hasError('email'));
    
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  constructor() { }
  error1:any;
  avatar:any;
  maxDate:any;
   myform:any;
  dates:any;
  dt:any;
  ngOnInit(): void {
  
    this.myform = new FormGroup({
      'name':new FormControl('',[Validators.required]),
      'email':new FormControl('',[Validators.required,Validators.email]),
      'password':new FormControl('',[Validators.required,Validators.minLength(8)]),
      'password_confirmation':new FormControl('',[Validators.required]),
      'dob':new FormControl('',Validators.required),
    });

    //future date disabled 
    this.fdatedisable();
    // console.log(this.dt);
  }

  fdatedisable(){
    var date = new Date();
    var day:any = date.getDate();
    var month:any = date.getMonth();
    var year:any = date.getFullYear();
     console.log("===day== "+ day);
     console.log("===month== "+ month);
     console.log("=== year == "+ year);
    if(day<10){
      day = '0'+day;
    }
    if(month<10){
      month = '0'+month;
    }
    this.maxDate = year + '-' + month + '-' + day;
    console.log(this.maxDate);
  }

  url:string='';
  profile(elem:any){
   
    if(elem.files.length>0){

      var reader = new FileReader();
      reader.readAsDataURL(elem.files[0]);
      reader.onload = (event:any)=>{
        this.url = event.target.result;
      }
      this.avatar = elem.files[0];
    }
  else{
    this.avatar =null;
  }

}

registerUser(){
  console.log(this.myform.value.name);
  const postDataReg = new FormData();
  postDataReg.append('name',this.myform.value.name);
  postDataReg.append('email',this.myform.value.email)
  console.log(postDataReg);
  console.log("====" + this.dates);
  
}

flag:boolean= false;
dateformate(){
  if(this.dt === '0000-00-00'){
    this.flag = true;
  }
}

}



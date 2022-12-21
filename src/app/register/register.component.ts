import { RegisterUser } from './../register-user';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from './../api.service';
import { Component, OnInit, ElementRef, AfterViewInit, ViewChild, HostListener } from '@angular/core';
import { compileNgModule } from '@angular/compiler';
import { Utill } from '../utill';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit ,AfterViewInit{

  @ViewChild('name', { static: false }) nameRef!: ElementRef;
  @ViewChild('exampleModal', { static: false }) exampleModalRef!: any;
  name:any;
  email:any;
  password:any;
  constructor(private service:ApiService,private route:Router,private toast:ToastrService,private activatedRoute:ActivatedRoute) { }
  ngAfterViewInit(): void {
   this.nameRef.nativeElement.focus();
  }

  reguser :RegisterUser = new RegisterUser();
  ngOnInit(): void {
  }

  // @HostListener("click")
 
  register(){
    
    console.log(this.reguser);

    this.service.register(this.reguser).subscribe(data=>{
     
      if(data){

      const params = {
        name:this.name,
        email:this.email,
        password:this.password
      }
      
        this.toast.success("Registered Successfully",'Success');
        this.name = '';
        this.email= '';
        this.password = '';
        this.route.navigate(['/login'],{
          queryParams:params,
          relativeTo:this.activatedRoute,
          skipLocationChange:true
        })
      }else {
     
        this.toast.warning("User Already Exist with this Email",'Warning');
        this.name = '';
        this.email= '';
        this.password = '';
      }
    })
  }

  register1(){
    const params = {
      name:'Vineeth',
      email:'ghhhh',
      password:'hjggfgfhgfhgfh'
    }
    console.log(JSON.stringify(params));
    
    this.route.navigate(['/login'],{
      queryParams:params,
      relativeTo:this.activatedRoute,
      skipLocationChange:true
    })
  }

  openPopup(){
    this.exampleModalRef.nativeElement.open();
  }

  onlyNumbersAreAllowed(event:any){
   
     return Utill.onlyNumbersAreAllowed1(event)
  }


  onlyCharacterAreAllowed(event:any){
    return Utill.onlyCharacterAreAllowed(event);
  }


  onlyNumbersAndCharacterAreAllowed(event:any){
     return Utill.onlyNumbersAndCharacterAreAllowed(event);
  }

 

}

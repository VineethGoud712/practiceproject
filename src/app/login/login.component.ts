import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:any;
  password:any;
  constructor(private service :ApiService,private router:Router,private toast:ToastrService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("query params ");
    this.activatedRoute.queryParams.subscribe(data=>{
      console.log(data);
    })
    

  }

  login(){
    const params = {
      email:this.email,
      password:this.password
    }

    console.log(params);
    this.service.login(params).subscribe((data:any)=>{
      console.log(data);
      if(data){
        this.toast.success('Login Successfully','success');
        this.router.navigate(['/createEmp']);
      }else{
        this.toast.warning('You have not Registered!!','Warning');
      }
    })
  }

}

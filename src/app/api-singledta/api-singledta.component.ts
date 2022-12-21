import { SharedService } from './../shared.service';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-api-singledta',
  templateUrl: './api-singledta.component.html',
  styleUrls: ['./api-singledta.component.css']
})
export class ApiSingledtaComponent implements OnInit {

  constructor(private route:ActivatedRoute,private service :ApiService,private tostr:ToastrService,private shared :SharedService) { }
 
  ngOnInit(): void {
   this.data();
   let shareddata:any[] =this.shared.getData();
   console.log("shareddata" +  shareddata)
  }

  databyId:any;
  color:any;
  data(){
    let id = this.route.snapshot.params['id'];
    console.log(id);
    if(false){
      this.color = 'red';
    }
    this.service.getbyId(id).subscribe(data=>{
      console.log(data);
      this.shared.setSharedData(data);
       this.databyId = data;
       this.showSuccess();
    },err=>{
      console.log(err);
      this.showError();
    })
  }


  showSuccess() {
    this.tostr.success('Success', 'Data loaded successfully');
  }

  showError(){
    this.tostr.error('Error','Some thing went wrong');
  }


}

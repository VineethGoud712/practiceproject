import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { SharedService } from './../shared.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-acomponent',
  templateUrl: './acomponent.component.html',
  styleUrls: ['./acomponent.component.css']
})
export class AcomponentComponent implements OnInit {
  iFrameUrl:any;
  modalName: any;
  modalSize: any;
  routerPath: any;
  id: any;

  @ViewChild('dynamicModal',{static:false})dynamicModal:any;
  constructor(private shared:SharedService,private sanitizer:DomSanitizer,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.iFrameUrl= this.sanitizer.bypassSecurityTrustResourceUrl('https://www.w3schools.com/js/');
    this.shared.getSharedData().subscribe((data:any)=>{
      console.log("subject data=======")
      console.table(data);
    })
  }

  onclick(){

    this.shared.getSharedData().subscribe((data:any)=>{
      console.log("subject data=======")
      console.table(data);
      this.id =  data.id;
    });
    const params = {
      id : this.id
    }

    this.OpenDynamicModal('Person Details','modal-xl','exampleModal',params)
  }


  OpenDynamicModal(modalName :String,modalSize:String,modalPath:String,params:any){
    this.modalName = modalName;
    this.modalSize = modalSize;
    this.routerPath = modalPath;
    this.dynamicModal.show();
    this.router.navigate([this.routerPath,{outlets:{modals: '/'}}],{
      queryParams: params ,
      relativeTo : this.activatedRoute,
      skipLocationChange:true
    })
  }

  closeDynamicModal(){
    this.dynamicModal.hide();
    this.router.navigate([this.routerPath,{outlets : {modals :null}}],{
      relativeTo : this.activatedRoute,
      skipLocationChange :true
    });
    this.modalName = '';
    this.modalSize =  '';
    this.routerPath  =  '';
  }

  openPrint(){

    var iframe:any = '';
    if(!iframe){
      iframe = document.createElement('iframe');
      document.body.appendChild(iframe);
      //iframe.style.display = 'none';
      iframe.onload = function(){
        setTimeout(() => {
          iframe.focus();
          iframe.contentWindow.print();
        }, 1);
      }
      let url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.w3schools.com/');
      iframe.src = url;
    }

  
   
  }
  

}

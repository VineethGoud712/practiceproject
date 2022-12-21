import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-bcomponent',
  templateUrl: './bcomponent.component.html',
  styleUrls: ['./bcomponent.component.css']
})
export class BcomponentComponent implements OnInit {

  iFrameUrl:any;
  displayIframe:boolean =false;
  constructor(private shared:SharedService,private santizer:DomSanitizer) { }

  ngOnInit(): void {
   this.openIframe()
    this.shared.getSharedData().subscribe((data:any)=>{
      console.log("B Component Data");
      console.table(data);
    })
  }

  openIframe(){
    this.displayIframe =  true;
    this.iFrameUrl = this.santizer.bypassSecurityTrustResourceUrl('https://youtube.com');
  }

}

import { Component, OnInit } from '@angular/core';
import { WhosaleapiService } from '../whosaleapi.service';

@Component({
  selector: 'app-buyer-dtls',
  templateUrl: './buyer-dtls.component.html',
  styleUrls: ['./buyer-dtls.component.css']
})
export class BuyerDtlsComponent implements OnInit {

  constructor(private whservice : WhosaleapiService) { }

  ngOnInit(): void {
    this.getStocksdtls()
  }

  dtls:any
  getStocksdtls(){
    this.whservice.getBuyers().subscribe(data=>{
      console.log(JSON.stringify(data));
      this.dtls = data;
    })
  }

}

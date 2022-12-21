import { Component, OnInit } from '@angular/core';
import { WhosaleapiService } from '../whosaleapi.service';
@Component({
  selector: 'app-listof-paid',
  templateUrl: './listof-paid.component.html',
  styleUrls: ['./listof-paid.component.css']
})
export class ListofPaidComponent implements OnInit {

  constructor(private whservice : WhosaleapiService) { }

  ngOnInit(): void {
    this.getStocksdtls();
  }

  dtls:any
  dtls2:any = [];
  getStocksdtls(){
    this.whservice.getCustomers().subscribe(data=>{
      console.log(JSON.stringify(data));
      this.dtls = data;
      this.dtls.filter((x:any)=>{
        if(x.customerId > 2019 && x.customerId < 2026){
          this.dtls2.push(x);
        }
      })
    })
  }

}

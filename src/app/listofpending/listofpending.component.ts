import { Component, OnInit } from '@angular/core';
import { WhosaleapiService } from '../whosaleapi.service';

@Component({
  selector: 'app-listofpending',
  templateUrl: './listofpending.component.html',
  styleUrls: ['./listofpending.component.css']
})
export class ListofpendingComponent implements OnInit {

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
        if(x.city == 'JBS' || x.street == 'koti' || x.customerId > 2026){
          this.dtls2.push(x);
        }
      })
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { WhosaleapiService } from '../whosaleapi.service';

@Component({
  selector: 'app-customer-dtls',
  templateUrl: './customer-dtls.component.html',
  styleUrls: ['./customer-dtls.component.css']
})
export class CustomerDtlsComponent implements OnInit {

  constructor(private whservice : WhosaleapiService) { }

  ngOnInit(): void {
    this.getStocksdtls();
  }

  dtls:any
  getStocksdtls(){
    this.whservice.getCustomers().subscribe(data=>{
      console.log(JSON.stringify(data));
      this.dtls = data;
    })
  }

}

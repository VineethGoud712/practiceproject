import { WhosaleapiService } from './../whosaleapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-dtls',
  templateUrl: './stock-dtls.component.html',
  styleUrls: ['./stock-dtls.component.css']
})
export class StockDtlsComponent implements OnInit {

  constructor(private whservice : WhosaleapiService) { }

  ngOnInit(): void {
    this.getStocksdtls();
  }

  dtls:any
  getStocksdtls(){
    this.whservice.getStocks().subscribe(data=>{
      console.log(JSON.stringify(data));
      this.dtls = data;
    })
  }
}

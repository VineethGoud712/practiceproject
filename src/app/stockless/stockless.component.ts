import { Component, OnInit } from '@angular/core';
import { WhosaleapiService } from './../whosaleapi.service';
@Component({
  selector: 'app-stockless',
  templateUrl: './stockless.component.html',
  styleUrls: ['./stockless.component.css']
})
export class StocklessComponent implements OnInit {

  constructor(private whservice : WhosaleapiService) { }

  ngOnInit(): void {

    this.getStocksdtls();
  }

  dtls:any
  dtls2:any =[];
  getStocksdtls(){
    this.whservice.getStocks().subscribe(data=>{
      console.log(JSON.stringify(data));
      this.dtls = data;
      this.dtls.filter((x:any)=>{
        if(x.amount < 800){
          this.dtls2.push(x);
        }
      });
    })
  }

}

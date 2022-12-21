import { Component, OnInit } from '@angular/core';
import { WhosaleapiService } from '../whosaleapi.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor(private whservice : WhosaleapiService) { }
  id:any;
  fname:any;
  mname:any;
  lname:any;
  qty:any;
  amount:any;
  ngOnInit(): void {
  }

  saveStock(){
    const params = {
       id:this.id,
       firstName:this.fname,
       lastName:this.lname,
       middleName:this.mname,
       qty:this.qty,
       amount:this.amount
    }
    console.log(JSON.stringify(params));
    

    this.whservice.saveStock(params).subscribe(data=>{
      console.log(data);
      
    })

  }

}

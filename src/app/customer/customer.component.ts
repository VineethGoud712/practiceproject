import { Component, OnInit } from '@angular/core';
import { WhosaleapiService } from '../whosaleapi.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private whservice : WhosaleapiService) { }

  ngOnInit(): void {
  }

}

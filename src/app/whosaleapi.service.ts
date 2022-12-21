import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhosaleapiService {

  constructor(private http : HttpClient) { }

  saveStock(params:any){
    return this.http.post('http://localhost:8080/api/v1/saveStock',{
      params:params
    })
  }

  getStocks(){
    return this.http.get('http://localhost:8080/api/v1/getStocks');
  }

  savebuyer(params:any){
    return this.http.post('http://localhost:8080/api/v1/saveBuyer',{
      params:params
    })
  }

  getBuyers(){
    return this.http.get('http://localhost:8080/api/v1/getBuyers');
  }


  saveCustomer(params:any){
    return this.http.post('http://localhost:8080/api/v1/saveCustomer',{
      params:params
    })
  }

  getCustomers(){
    return this.http.get('http://localhost:8080/api/v1/getCustomers');
  }


  saveEmployee(params:any){
    return this.http.post('http://localhost:8080/api/v1/saveEmployee',{
      params:params
    })
  }

  getEmployee(){
    return this.http.get('http://localhost:8080/api/v1/getEmployees');
  }
}

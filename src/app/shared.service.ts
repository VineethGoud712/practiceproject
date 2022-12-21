import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public subject = new Subject<any>();

  constructor(private http:HttpClient) { }

  data:any = [];

  setData(val:[]){
   this.data = val;
  }

  getData(){
    return this.data;
  }


  setSharedData(message:any){
    this.subject.next(message);
  }

  getSharedData(){
    return this.subject.asObservable();
  }

}

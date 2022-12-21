
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { 


  }

  getApidata(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getbyId(id:any){
     return this.http.get('https://jsonplaceholder.typicode.com/posts/'+id);
  }

  getAllEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>('http://localhost:8080/api/v1/AllEmployees');
  }

  postEmploye(body:Employee){
    return this.http.post('http://localhost:8080/api/v1/employees',body);
  }

  getEmployeeById(id:number){
    return this.http.get('http://localhost:8080/api/v1/employees/' +id);
  }

  DropEmployee(id:number){
    // alert("11111");
    return this.http.delete('http://localhost:8080/api/v1/employees/' +id);
  }

  updateEmp(Employee:Employee,id:number){
    return this.http.put('http://localhost:8080/api/v1/employees/' + id,Employee);
  }

  register(params:any){
     return this.http.post('http://localhost:8080/registration/registring',params)
  }

  login(params:any){
    return this.http.post('http://localhost:8080/registration/login',params)
  }

  
}

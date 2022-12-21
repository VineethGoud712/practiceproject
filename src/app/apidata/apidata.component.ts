import { SharedService } from './../shared.service';
import { ApiService } from './../api.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-apidata',
  templateUrl: './apidata.component.html',
  styleUrls: ['./apidata.component.css']
})
export class ApidataComponent implements OnInit {

  @ViewChild('content',{static:false})el!:ElementRef;
  constructor(private apiservice :ApiService,private toastr: ToastrService,private rtr:Router,private shared:SharedService) { }

  ngOnInit(): void {
    this.apidata();
    //this.filterData();
  
  }

  data:any;
  apidata(){
    this.apiservice.getApidata().subscribe((res:any)=>{
      this.data = res;
      this.data.find((x: any)=>{console.log(x.id)})
      console.table(this.data)
      this.shared.setData(res);
      this.data.reverse();
      this.showSuccess();
    },err=>{
      console.log(err);
      this.showError();
    })
  }

fileDownload(){
  var options = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true, 
    showTitle: true,
    title: 'USER DETAILS',
    useBom: true,
   
    headers: ["USER ID", "ID", "TITLE","DESCRIPTION"]
  };
 
  new ngxCsv(this.data, "Report", options);
}

pdfDownload(){
  alert
  const pdf = new jsPDF('p','pt');

pdf.html(this.el.nativeElement,{
  callback:(pdf)=>{
    pdf.save("Report.pdf");
  }
})

}

  // filterArray:any;
  // data2:any;
  // filterData(){
  //   console.log()
  //   this.apiservice.getApidata().subscribe(res=>{
  //       this.filterArray = res;
  //       this.filterArray.filter((val:any) =>{
  //         console.log("====" + val.id);
  //         if(val.id == 2){
  //           this.data2.push(val);
  //           // this.data2 = val;
  //           console.log("===data2==="   + this.data2);
  //         }

          
  //       })
  //   })
  // }

  showSuccess() {
    this.toastr.success('Success', 'Data loaded successfully');
  }

  showError(){
    this.toastr.error('Error','Some thing went wrong');
  }

  idData(id:any){
      this.rtr.navigate(['api-data/'+id])
  }

}

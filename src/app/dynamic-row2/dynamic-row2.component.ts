import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamic-row2',
  templateUrl: './dynamic-row2.component.html',
  styleUrls: ['./dynamic-row2.component.css']
})
export class DynamicRow2Component implements OnInit {

  myform:any;
  constructor(private fb:FormBuilder,private toastr:ToastrService) { }


  ngOnInit(): void {
    this.myform = this.fb.group({
      items:this.fb.array([
        this.fb.group({
          item1:[''],
          item2:['']
        })
      ])
     
    })
  }

  get items(){
    return this.myform.get('items') as FormArray;

  }

  addRow(){
    const newRow =   this.fb.group({
      item1:[''],
      item2:['']
    });
    this.items.push(newRow);
    this.toastr.success('Row Added Successfully');
  }

  deleteRow(index:number){
    const itemlen = this.items.length;
    if(itemlen==1){
      this.toastr.error('There should atleast one row');
    }else{
      this.items.removeAt(index);
      this.toastr.error('Deleted succesfully');
    }
     
  }

  formdata(){

  }

}

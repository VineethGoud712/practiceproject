import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dynamic-row',
  templateUrl: './dynamic-row.component.html',
  styleUrls: ['./dynamic-row.component.css']
})
export class DynamicRowComponent implements OnInit {


  constructor(private _fb:FormBuilder,private toastr:ToastrService) { }
  addForm:any ;
  ngOnInit(): void {
   
    this.addForm = this._fb.group({
      name:[''],
      address:this._fb.array([
        this._fb.group({
          add1:[''],
          street:[''],
          pin:['']
        })
      ])
    })

    console.log(this.addForm);
  }

get address(){
  return this.addForm.get('address') as FormArray;
}

  addrow(){
   const newRow=  this._fb.group({
      add1:[''],
      street:[''],
      pin:['']
    });
      this.address.push(newRow);
      this.toastr.success('Row added Successfully');
   
    
  }

  deleteRow(index:number){
    const itemlen = this.address.length;
    if(itemlen == 1){
      this.toastr.error('One Row is mandatory');
    }else{
      this.address.removeAt(index);
      this.toastr.success('Deleted sucessfully');
    }
  }

  dynamicData(){
    console.log(this.addForm.value);
  }
}

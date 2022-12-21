import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateComponent } from './update/update.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';



@NgModule({
  declarations: [
    EmployeeListComponent,
    UpdateComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmployeeManagementModule { }

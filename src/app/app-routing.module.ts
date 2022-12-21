import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { AlertComponent } from './alert/alert.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ListofpendingComponent } from './listofpending/listofpending.component';
import { CustomerDtlsComponent } from './customer-dtls/customer-dtls.component';
import { StockDtlsComponent } from './stock-dtls/stock-dtls.component';
import { CustomerComponent } from './customer/customer.component';
import { BuyerComponent } from './buyer/buyer.component';
import { StockComponent } from './stock/stock.component';
import { SharedComponent } from './shared/shared.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { IncludesItemComponent } from './includes-item/includes-item.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateComponent } from './employee-management/update/update.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { BuyerDtlsComponent } from './buyer-dtls/buyer-dtls.component';
import { MultiselectDropdownComponent } from './multiselect-dropdown/multiselect-dropdown.component';
import { DynamicRow2Component } from './dynamic-row2/dynamic-row2.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoactionComponent } from './loaction/loaction.component';
import { AboutComponent } from './about/about.component';
import { CompanyComponent } from './company/company.component';
import { AddressComponent } from './address/address.component';
import { DynamicRowComponent } from './dynamic-row/dynamic-row.component';
import { ApiSingledtaComponent } from './api-singledta/api-singledta.component';
import { ApidataComponent } from './apidata/apidata.component';
import { DirectivesComponent } from './directives/directives.component';
import { RegistrationComponent } from './registration/registration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { EmployeListComponent } from './employe-list/employe-list.component';
import {SingleEmployeComponent} from  './single-employe/single-employe.component'
import { UtillComponent } from './utill/utill.component';
import { StocklessComponent } from './stockless/stockless.component';
import { ListofPaidComponent } from './listof-paid/listof-paid.component';
import { EmployeejobApComponent } from './employeejob-ap/employeejob-ap.component';
const routes: Routes = [
  {
    path:'',component:RegisterComponent
  },{
    path:'register',component:RegisterComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'home',component:RegistrationComponent
  },
  {
    path:'about',component:AboutComponent,children:[
      {
        path:'location',outlet:'map',component:LoactionComponent
      },
      {
        path:'feedback',outlet:'feeds',component:FeedbackComponent
      }
    ]
  },
  {
    path:'directives',component:DirectivesComponent
  },
  {
    path:'api-data',component:ApidataComponent
  },
  {
    path:'api-data/:id',component:ApiSingledtaComponent,
    children:[
     
      {
        path:'address',component:AddressComponent
      },
      {
        path:'company',component:CompanyComponent
      }
    ]
  },
  {
    path:'dynamic',component:DynamicRowComponent
  },
  {
    path:'dynamic2',component:DynamicRow2Component
  },
  {
    path:'dyamic-table',component:DynamicTableComponent
  },
  {
    path:'ms',component:MultiselectDropdownComponent
  },
  {
    path:'emplList',component:EmployeListComponent
  },
  {
    path:'createEmp',component:CreateEmployeeComponent
  },
  {
    path:'employee/:id',component:SingleEmployeComponent
  },
  {
    path:'update/:id',component:UpdateEmployeeComponent
  },
  {
    path:'items',component:IncludesItemComponent
  },
  {
    path:'Subject',component:UtillComponent,
    // children : [
    //   {
    //     path:'exampleModal',
    //     children:[
    //       {
    //         path:'/',
    //         outlet :'modals',
    //         component : UtillComponent
    //       }
    //     ]
       
    //   }
    // ]
  },
  {
    path:'shared',component:SharedComponent
  },
  {
    path:'stock',component:StockComponent
  },
  {
    path:'buyer',component:BuyerComponent
  },{
    path:'customer',component:CustomerComponent
  },{
    path:'stockDtls',component:StockDtlsComponent
  },
  {
    path:'buyerDtls',component:BuyerDtlsComponent,
  },{
    path : 'customerDtls',component:CustomerDtlsComponent
  },
  {
    path :'qtyless',component :StocklessComponent
  },
  {
    path :'pendings',component  :ListofpendingComponent
  },
  {
    path :'paid',component : ListofPaidComponent
  },{
    path:'jobApp',component : EmployeejobApComponent
  },
  {
    path:'listOfEmployees',component : EmployeeDetailsComponent
  },
  {
    path:'qunatityreached',component : AlertComponent
  },
  {
    path:'pendingAmount',component : AlertComponent
  },
  {
    path:'requestMoreQuantity',component : AlertComponent
  },
  {
    path:'reactiveForms',component:ReactiveFormsComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

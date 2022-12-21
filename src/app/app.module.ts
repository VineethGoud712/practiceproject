
import { ApiService } from './api.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgePipe } from './pipes/age.pipe';
import { ApidataComponent } from './apidata/apidata.component';
import { HttpClientModule} from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule , NgxUiLoaderRouterModule } from "ngx-ui-loader";
import { RegistrationComponent } from './registration/registration.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ApiSingledtaComponent } from './api-singledta/api-singledta.component';
import { DynamicRowComponent } from './dynamic-row/dynamic-row.component';
import { AddressComponent } from './address/address.component';
import { CompanyComponent } from './company/company.component';
import { AboutComponent } from './about/about.component';
import { LoactionComponent } from './loaction/loaction.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { DynamicRow2Component } from './dynamic-row2/dynamic-row2.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { MultiselectDropdownComponent } from './multiselect-dropdown/multiselect-dropdown.component'
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { EmployeListComponent } from './employe-list/employe-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { SingleEmployeComponent } from './single-employe/single-employe.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { IncludesItemComponent } from './includes-item/includes-item.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SharedComponent } from './shared/shared.component';
import { ChildComponent } from './child/child.component';
import { DynamicPopupComponent } from './dynamic-popup/dynamic-popup.component';
import { UtillComponent } from './utill/utill.component';
import { AcomponentComponent } from './acomponent/acomponent.component';
import { BcomponentComponent } from './bcomponent/bcomponent.component';
import { StockComponent } from './stock/stock.component';
import { BuyerComponent } from './buyer/buyer.component';
import { CustomerComponent } from './customer/customer.component';
import { StockDtlsComponent } from './stock-dtls/stock-dtls.component';
import { BuyerDtlsComponent } from './buyer-dtls/buyer-dtls.component';
import { CustomerDtlsComponent } from './customer-dtls/customer-dtls.component';
import { StocklessComponent } from './stockless/stockless.component';
import { ListofpendingComponent } from './listofpending/listofpending.component';
import { ListofPaidComponent } from './listof-paid/listof-paid.component';
import { EmployeejobApComponent } from './employeejob-ap/employeejob-ap.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AlertComponent } from './alert/alert.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    AgePipe,
    ApidataComponent,
    RegistrationComponent,
    HeaderComponent,
    ApiSingledtaComponent,
    DynamicRowComponent,
    AddressComponent,
    CompanyComponent,
    AboutComponent,
    LoactionComponent,
    FeedbackComponent,
    DynamicRow2Component,
    DynamicTableComponent,
    MultiselectDropdownComponent,
    EmployeListComponent,
    UpdateEmployeeComponent,
    CreateEmployeeComponent,
    SingleEmployeComponent,
    IncludesItemComponent,
    RegisterComponent,
    LoginComponent,
    SharedComponent,
    ChildComponent,
    DynamicPopupComponent,
    UtillComponent,
    AcomponentComponent,
    BcomponentComponent,
    StockComponent,
    BuyerComponent,
    CustomerComponent,
    StockDtlsComponent,
    BuyerDtlsComponent,
    CustomerDtlsComponent,
    StocklessComponent,
    ListofpendingComponent,
    ListofPaidComponent,
    EmployeejobApComponent,
    EmployeeDetailsComponent,
    AlertComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true
    }),
    NgxUiLoaderRouterModule.forRoot({
      showForeground:true
    }),
    ReactiveFormsModule,
    NgMultiSelectDropDownModule,
    NgxPaginationModule
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { counterReducer } from './counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';

import { CustomerReducer } from './customer.reducer';
import { CustomersViewComponent } from './customers-view/customers-view.component';
import { CustomerAddComponent } from './customer-add/customer-add.component'; 

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    CustomersViewComponent,
    CustomerAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer,customers: CustomerReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

 import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LKRCurrencyPipe } from './pipes/lkrcurrency.pipe';
 import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LKRCurrencyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

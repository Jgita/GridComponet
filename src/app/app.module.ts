import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import { FormsModule }   from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DataTableModule, SharedModule, ButtonModule, CalendarModule, DialogModule} from 'primeng/primeng';
import { HttpModule } from '@angular/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { CarServiceService } from './car-service.service';
import {PrimeDragulaDirective} from './primeDragula';
import { DragulaService } from 'ng2-dragula';

@NgModule({
  declarations: [
    AppComponent,
    PrimeDragulaDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    DataTableModule,
    HttpModule,
    SharedModule,
    CommonModule, 
    FormsModule,
    HttpClientInMemoryWebApiModule,
    ButtonModule,
    CalendarModule,
    DialogModule
  ],
  providers: [CarServiceService, DragulaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
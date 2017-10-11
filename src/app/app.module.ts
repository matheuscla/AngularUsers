import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'ng2-materialize';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app.routing.module";
import { SharedModule } from "./shared/shared.module";
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    AppRoutingModule,
    SharedModule,
    BrowserModule,
    MaterializeModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

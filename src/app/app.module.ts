import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BinderDirective } from './binder.directive';
import {FormsModule} from '@angular/forms';
import { BinderComponent } from './binder/binder.component';


@NgModule({
  declarations: [
    AppComponent,
    BinderDirective,
    BinderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

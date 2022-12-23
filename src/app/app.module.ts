import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArrayModule } from './array/array.module';
import { LenguajesComponent } from './array/lenguajes/lenguajes.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ArrayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

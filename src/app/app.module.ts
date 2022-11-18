import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
//import {HeaderModule} from "gdg-lib";
//import {MorseModule} from "gdg-lib";

import {HeaderModule} from "../../projects/gdg-lib/src/lib/components/gdg-header/gdg-header.module";
import {MorseModule} from "../../projects/gdg-lib/src/lib/components/gdg-morse/gdg-morse.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    MorseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

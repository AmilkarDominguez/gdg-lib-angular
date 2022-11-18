import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MorseComponent } from './gdg-morse.component';

@NgModule({
  declarations: [
    MorseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MorseComponent
  ]
})
export class MorseModule { }

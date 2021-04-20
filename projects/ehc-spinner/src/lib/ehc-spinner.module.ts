import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EhcSpinnerComponent } from './ehc-spinner/ehc-spinner.component';



@NgModule({
  declarations: [
    EhcSpinnerComponent
  ],
  exports: [
    EhcSpinnerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EhcSpinnerModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PIPES_CADENAS } from '../pipes/cadenas.pipe';
import { SizerComponent } from '../components/sizer.component';



@NgModule({
  declarations: [
    PIPES_CADENAS, SizerComponent,
  ],
  exports: [
    PIPES_CADENAS, SizerComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class MyCoreModule { }

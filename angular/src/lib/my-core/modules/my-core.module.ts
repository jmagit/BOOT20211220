import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PIPES_CADENAS } from '../pipes/cadenas.pipe';
import { SizerComponent } from '../components/sizer.component';
import { PIPES_NUMERICOS } from '../pipes/numericos.pipe';



@NgModule({
  declarations: [
    PIPES_CADENAS, PIPES_NUMERICOS, SizerComponent,
  ],
  exports: [
    PIPES_CADENAS, PIPES_NUMERICOS, SizerComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class MyCoreModule { }

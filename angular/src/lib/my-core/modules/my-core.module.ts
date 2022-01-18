import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PIPES_CADENAS } from '../pipes/cadenas.pipe';
import { SizerComponent } from '../components/sizer.component';
import { PIPES_NUMERICOS } from '../pipes/numericos.pipe';
import { MIS_VALIDADORES } from '../directives/validadores.directive';
import { UnlessDirective } from '../directives/estructurales.directive';
import { ShowDirective, ShowErrorsDirective, WindowConfirmDirective } from '../directives/atributo.directive';



@NgModule({
  declarations: [
    PIPES_CADENAS, PIPES_NUMERICOS, SizerComponent, MIS_VALIDADORES,
      UnlessDirective, ShowDirective, WindowConfirmDirective, ShowErrorsDirective,
  ],
  exports: [
    PIPES_CADENAS, PIPES_NUMERICOS, SizerComponent, MIS_VALIDADORES,
      UnlessDirective, ShowDirective, WindowConfirmDirective, ShowErrorsDirective,
  ],
  imports: [
    CommonModule
  ]
})
export class MyCoreModule { }

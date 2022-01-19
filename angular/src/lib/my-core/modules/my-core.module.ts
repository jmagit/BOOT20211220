import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PIPES_CADENAS } from '../pipes/cadenas.pipe';
import { SizerComponent } from '../components/sizer.component';
import { PIPES_NUMERICOS } from '../pipes/numericos.pipe';
import { UnlessDirective } from '../directives/estructurales.directive';
import { ShowDirective, ShowErrorsDirective, WindowConfirmDirective } from '../directives/atributo.directive';
import { MIS_VALIDADORES } from '../directives/validacion/validadores.directive';
import { VALIDATORS_DATES } from '../directives/validacion/dates.directive';
import { VALIDATORS_CROSS_INPUT } from '../directives/validacion/cross-field.directive';



@NgModule({
  declarations: [
    PIPES_CADENAS, PIPES_NUMERICOS, SizerComponent, MIS_VALIDADORES, VALIDATORS_DATES, VALIDATORS_CROSS_INPUT,
      UnlessDirective, ShowDirective, WindowConfirmDirective, ShowErrorsDirective,
  ],
  exports: [
    PIPES_CADENAS, PIPES_NUMERICOS, SizerComponent, MIS_VALIDADORES, VALIDATORS_DATES, VALIDATORS_CROSS_INPUT,
      UnlessDirective, ShowDirective, WindowConfirmDirective, ShowErrorsDirective,
  ],
  imports: [
    CommonModule
  ]
})
export class MyCoreModule { }

import { Directive, ElementRef, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';


export function EsMayusculas(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
      if (!control.value) { return null; }
      if(control.value.toLocaleUpperCase() === control.value)
        return null;
      else
        return { esmayusculas: 'Tiene que estar en mayúsculas' }
  };
}

@Directive({
  selector: '[esmayusculas][formControlName],[esmayusculas][formControl],[esmayusculas][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EsMayusculasValidator, multi: true }]
})
export class EsMayusculasValidator implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
      return EsMayusculas()(control);
  }
}

export function EsNIF(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
      if (!control.value) { return null; }
      const err = { nif: { invalidFormat: true, invalidChar: true, message: 'No es un nif valido' } };
      if (/^\d{1,8}\w$/.test(control.value)) {
          const letterValue = control.value.substr(control.value.length - 1);
          const numberValue = control.value.substr(0, control.value.length - 1);
          err.nif.invalidFormat = false;
          return letterValue.toUpperCase() === 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(numberValue % 23) ? null : err;
      } else { return err; }
  };
}
@Directive({
  selector: '[nif][formControlName],[nif][formControl],[nif][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NIFValidator, multi: true }]
})
export class NIFValidator implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
      return EsNIF()(control);
  }
}

@Directive({
  selector: '[type][formControlName],[type][formControl],[type][ngModel]',
  providers: [
      { provide: NG_VALIDATORS, useExisting: forwardRef(() => TypeValidator), multi: true }
  ]
})
export class TypeValidator implements Validator {
  constructor(private elem: ElementRef) { }
  validate(control: AbstractControl): ValidationErrors | null {
      const valor = control.value;
      if (valor) {
        const dom = this.elem.nativeElement;
        if (dom.validity) { // dom.checkValidity();
          return dom.validity.typeMismatch ? { 'type': dom.validationMessage } : null;
        }
      }
      return null;
  }
}

export function NotBlankValidation(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
     return control.value?.trim() ? null : { notblank: 'No puede estar en blanco' }
  };
}

@Directive({
  selector: '[notblank]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NotBlankValidator, multi: true }]
})
export class NotBlankValidator implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return NotBlankValidation()(control);
  }
}
export const MIS_VALIDADORES = [EsMayusculasValidator, NIFValidator, TypeValidator, NotBlankValidator]

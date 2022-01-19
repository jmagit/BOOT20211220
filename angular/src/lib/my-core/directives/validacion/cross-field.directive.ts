import { AfterViewInit, Directive, DoCheck, ElementRef, forwardRef, Input } from '@angular/core';
import { AbstractControl, FormGroup, NgModel, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { Comparator, convertValue } from './utils.class';

// Activa la validación cruzada de los formularios: vigila al control vinculado
@Directive({
  selector: `[cross-field-validation]`,
  providers: [{ provide: NG_VALIDATORS, useExisting: CrossFieldValidator, multi: true }]
})
export class CrossFieldValidator implements Validator {
  private working = false;

  validate(control: FormGroup): ValidationErrors | null {
    if (this.working) return null;
    this.working = true;
    for (let field in control.controls) {
      control.controls[field].updateValueAndValidity();
    }
    this.working = false;
    return null;
  }
}

export function CrossInputValidation(bindNameControl: string | null | undefined, compara: Comparator<any>, property: string = 'crossInput'): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    control.valueChanges.subscribe()
    if (!control.value) { return null; }
    if (!bindNameControl)
      throw new Error('Falta el control de referencia.');
    let bindControl = control.root.get(bindNameControl);
    if (!bindControl)
      throw new Error('No encuentro el control de referencia.');
    let localValue = convertValue(control.value);
    let bindValue = convertValue(bindControl.value);
    let validationErrors: { [key: string]: any } = {}
    validationErrors[property] = { localValue: control.value, bindValue: bindControl.value, message: 'Unsurpassed comparison' }
    return compara(localValue, bindValue) ? null : validationErrors
  };
}

@Directive({
  selector: '[equalsTo][formControlName],[equalsTo][formControl],[equalsTo][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EqualsToValidator, multi: true }]
})
export class EqualsToValidator implements Validator {
  readonly propertyName = 'equalsTo'
  @Input('equalsTo') bindControl: string | null | undefined;
  @Input('equalsToMessage') message: string | null | undefined;

  validate(control: AbstractControl): ValidationErrors | null {
    let validationErrors = CrossInputValidation(this.bindControl, (a, b) => a === b, this.propertyName)(control)
    if (validationErrors)
      if (this.message)
        validationErrors[this.propertyName].message = this.message;
      else
        validationErrors[this.propertyName].message = `${validationErrors[this.propertyName].localValue} es distinto de ${validationErrors[this.propertyName].bindValue}`
    return validationErrors;
  }
}
@Directive({
  selector: '[distinctTo][formControlName],[distinctTo][formControl],[distinctTo][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: DistinctToValidator, multi: true }]
})
export class DistinctToValidator implements Validator {
  readonly propertyName = 'distinctTo'
  @Input('distinctTo') bindControl: string | null | undefined;
  @Input('distinctToMessage') message: string | null | undefined;

  validate(control: AbstractControl): ValidationErrors | null {
    let validationErrors = CrossInputValidation(this.bindControl, (a, b) => a !== b, this.propertyName)(control)
    if (validationErrors)
      if (this.message)
        validationErrors[this.propertyName].message = this.message;
      else
        validationErrors[this.propertyName].message = `${validationErrors[this.propertyName].localValue} es igual a ${validationErrors[this.propertyName].bindValue}`
    return validationErrors;
  }
}

@Directive({
  selector: '[lessThan][formControlName],[lessThan][formControl],[lessThan][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: LessThanValidator, multi: true }]
})
export class LessThanValidator implements Validator {
  readonly propertyName = 'lessThan'
  @Input('lessThan') bindControl: string | null | undefined;
  @Input('lessThanMessage') message: string | null | undefined;

  validate(control: AbstractControl): ValidationErrors | null {
    let validationErrors = CrossInputValidation(this.bindControl, (a, b) => a < b, this.propertyName)(control)
    if (validationErrors)
      if (this.message)
        validationErrors[this.propertyName].message = this.message;
      else
        validationErrors[this.propertyName].message = `${validationErrors[this.propertyName].localValue} debe ser menor que ${validationErrors[this.propertyName].bindValue}`
    return validationErrors;
  }
}

@Directive({
  selector: '[lessOrEqualsThan][formControlName],[lessOrEqualsThan][formControl],[lessOrEqualsThan][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: LessOrEqualsThanValidator, multi: true }]
})
export class LessOrEqualsThanValidator implements Validator {
  readonly propertyName = 'lessOrEqualsThan'
  @Input('lessOrEqualsThan') bindControl: string | null | undefined;
  @Input('lessOrEqualsThanMessage') message: string | null | undefined;

  validate(control: AbstractControl): ValidationErrors | null {
    let validationErrors = CrossInputValidation(this.bindControl, (a, b) => a <= b, this.propertyName)(control)
    if (validationErrors)
      if (this.message)
        validationErrors[this.propertyName].message = this.message;
      else
        validationErrors[this.propertyName].message = `${validationErrors[this.propertyName].localValue} debe ser menor o igual a ${validationErrors[this.propertyName].bindValue}`
    return validationErrors;
  }
}

@Directive({
  selector: '[greaterThan][formControlName],[greaterThan][formControl],[greaterThan][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: GreaterThanValidator, multi: true }]
})
export class GreaterThanValidator implements Validator {
  readonly propertyName = 'greaterThan'
  @Input('greaterThan') bindControl: string | null | undefined;
  @Input('greaterThanMessage') message: string | null | undefined;

  validate(control: AbstractControl): ValidationErrors | null {
    let validationErrors = CrossInputValidation(this.bindControl, (a, b) => a > b, this.propertyName)(control)
    if (validationErrors)
      if (this.message)
        validationErrors[this.propertyName].message = this.message;
      else
        validationErrors[this.propertyName].message = `'${validationErrors[this.propertyName].localValue}' debe ser mayor que '${validationErrors[this.propertyName].bindValue}'`
    return validationErrors;
  }
}

@Directive({
  selector: '[greaterOrEqualsThan][formControlName],[greaterOrEqualsThan][formControl],[greaterOrEqualsThan][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: GreaterOrEqualsThanValidator, multi: true }]
})
export class GreaterOrEqualsThanValidator implements Validator {
  readonly propertyName = 'greaterOrEqualsThan'
  @Input('greaterOrEqualsThan') bindControl: string | null | undefined;
  @Input('greaterOrEqualsThanMessage') message: string | null | undefined;

  validate(control: AbstractControl): ValidationErrors | null {
    let validationErrors = CrossInputValidation(this.bindControl, (a, b) => a >= b, this.propertyName)(control)
    if (validationErrors)
      if (this.message)
        validationErrors[this.propertyName].message = this.message;
      else
        validationErrors[this.propertyName].message = `${validationErrors[this.propertyName].localValue} debe ser mayor o igual a ${validationErrors[this.propertyName].bindValue}`
    return validationErrors;
  }
}

export const VALIDATORS_CROSS_INPUT = [EqualsToValidator, DistinctToValidator, LessThanValidator, LessOrEqualsThanValidator,
  GreaterThanValidator, GreaterOrEqualsThanValidator, CrossFieldValidator,]

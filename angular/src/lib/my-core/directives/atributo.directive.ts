import { Directive, Input, Output, HostListener, EventEmitter, HostBinding, OnChanges, SimpleChanges } from '@angular/core';

@Directive({ selector: `[winConfirm]` })
export class WindowConfirmDirective {
  @Input() winConfirmMessage = '¿Seguro?';
  @Output() winConfirm: EventEmitter<any> = new EventEmitter();
  @HostBinding('class.pressed') isPressed: boolean = false;

  @HostListener('click', ['$event'])
  confirmFirst() {
    if (window.confirm(this.winConfirmMessage)) {
      this.winConfirm.emit(null);
    }
  }
  @HostListener('mousedown') hasPressed() { this.isPressed = true; }
  @HostListener('mouseup') hasReleased() { this.isPressed = false; }
}

@Directive({ selector: '[show]' })
export class ShowDirective {
  @HostBinding('hidden') hidden: boolean = false;
  @Input('show') set show(value: boolean) { this.hidden = !value; }
}

@Directive({ selector: '[myShowErrors]' })
export class ShowErrorsDirective implements OnChanges {
  @Input('myShowErrors') errors: any = undefined;
  @HostBinding('textContent') mensaje: string = '';
  @HostBinding('hidden') hidden: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.errors) {
      this.hidden = true;
      return;
    }
    let msg = '';
    for (let err in this.errors) {
      switch (err) {
        case 'required':
          msg += 'Es obligatorio. ';
          break;
        case 'minlength':
          msg += `Como mínimo debe tener ${this.errors[err].requiredLength} caracteres. `;
          break;
        case 'maxlength':
          msg += `Como máximo debe tener ${this.errors[err].requiredLength} caracteres. `;
          break;
        case 'pattern':
        case 'email':
          msg += 'El formato no es correcto. ';
          break;
        case 'min':
          msg += `El valor debe ser mayor o igual a ${this.errors[err].min}. `;
          break;
        case 'max':
          msg += `El valor debe ser inferior o igual a ${this.errors[err].max}. `;
          break;
        default:
          if (typeof this.errors[err] === 'string')
            msg += `${this.errors[err]}${this.errors[err].endsWith('.')?'':'.'} `;
          else if (typeof this.errors[err]?.message === 'string')
            msg += `${this.errors[err].message}${this.errors[err].message.endsWith('.')?'':'.'} `;
          break;
      }
    }
    this.mensaje = msg.trim();
    this.hidden = this.mensaje === '';
  }
}

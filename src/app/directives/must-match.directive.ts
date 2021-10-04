import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appMustMatch]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MustMatchDirective,
    multi: true
  }]
})
export class MustMatchDirective {
  @Input() appMustMatch!: string;
  validate(control: AbstractControl): {[key: string]: any} | null {
    const controlToCompare = control.parent?.get(this.appMustMatch);
    if (controlToCompare && controlToCompare.value !== control.value) {
      return { 'notEqual': true }
    }
    return null;
  }
}

import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function rangeDateValidator(minDate: number, maxDate: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        return minDate < control.value && control.value < maxDate ? { 'date': { value: control.value}} : null ;
    }
}
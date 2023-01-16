import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function rangeDateValidator(minDate: number, maxDate: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const min = maxDate > minDate;
        return min ? { 'min': { value: control.value}} : null
    }
}
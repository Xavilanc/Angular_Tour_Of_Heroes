import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function isRequiredValidator(title: number, id: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const isRequired = title > 0 || id > 0;
        return isRequired ? null : { 'isRequired': { value: control.value}}
    }
}
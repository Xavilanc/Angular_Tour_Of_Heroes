import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function isRequiredValidator(title: AbstractControl, id: AbstractControl): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const isRequired = title!== null || id!== null;
        return isRequired ? { 'isRequired': { value: control.value}} : null
    }
}
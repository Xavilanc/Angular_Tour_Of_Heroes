import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function isRequiredValidator(title: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        console.log('title' + title)
        return title > 0 || control.value.length > 0 ? null : { 'isRequired': { value: control.value}}
    }
}
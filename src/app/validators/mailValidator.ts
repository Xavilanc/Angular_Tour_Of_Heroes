import { AbstractControl, ValidationErrors } from "@angular/forms";

export function mailValidator(control: AbstractControl): ValidationErrors | null {
    const mailRegex: RegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'gm');
    const valid = mailRegex.test(control.value);
    console.log(valid);

    return valid ? null : { 'invalidMail': { value: control.value}};
}
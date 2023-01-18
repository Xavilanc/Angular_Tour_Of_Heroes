import { AbstractControl, ValidationErrors } from "@angular/forms";

export function mailValidator(control: AbstractControl): ValidationErrors | null {
    const mailRegex = RegExp('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$');
    const valid = mailRegex.test(control.value);

    const errors = {
        mail: {
            rules: 'adresse mail non valide'
        }
    };
    return !valid ? errors : null;
}
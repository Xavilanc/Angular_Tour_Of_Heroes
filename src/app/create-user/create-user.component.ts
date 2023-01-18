import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NewUser } from '../models/newUser';
import { mailValidator } from '../validators/mailValidator';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  newUser?: NewUser;
  submitted = false;

  userForm = this.formBuilder.group({
    username: ['', Validators.required],
    credentials: this.formBuilder.group({
      mail: ['', [Validators.required, mailValidator]],
      password: ['', Validators.required],
    }),
    adress: this.formBuilder.group({
      street: ['', Validators.required],
      postcode: [null, Validators.minLength(5)],
      city: ['', Validators.required],
    })

  })

  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  //Getters
  get username(): FormControl {
    return this.userForm.controls['username'] as FormControl;
  }

  get mail(): FormControl {
    return this.credentials.controls['mail'] as FormControl;
  }

  get password(): FormControl {
    return this.credentials.controls['password'] as FormControl;
  }

  get street(): FormControl {
    return this.adress.controls['street'] as FormControl;
  }

  get postcode(): FormControl {
    return this.adress.controls['postcode'] as FormControl;
  }

  get city(): FormControl {
    return this.adress.controls['city'] as FormControl;
  }

  get credentials(): FormGroup {
    return this.userForm.controls['credentials'] as FormGroup;
  }

  get adress(): FormGroup {
    return this.userForm.controls['adress'] as FormGroup;
  }

  onSubmit() {
    this.newUser = {
      username: this.userForm.get('username')?.value!,
      credentials: {
        mail: this.credentials.get('mail')?.value!,
        password: this.credentials.get('password')?.value!,
      },
      adress: {
        street: this.adress.get('street')?.value!,
        postcode: this.adress.get('postcode')?.value!,
        city: this.adress.get('city')?.value!
      }
    }
    this.submitted = true;
    
    console.log("création d'un nouvel utilisateur");
    console.log(this.newUser);
  }

}

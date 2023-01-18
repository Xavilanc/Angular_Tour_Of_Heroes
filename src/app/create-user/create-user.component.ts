import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NewUser } from '../models/newUser';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  newUser?: NewUser;

  userForm = this.formBuilder.group({
    username: [''],
    credentials: this.formBuilder.group({
      mail: [''],
      password: ['']
    }),
    adress: this.formBuilder.group({
      street: [''],
      postcode: [0],
      city: ['']
    })

  })


  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
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
    };
    console.log("création d'un nouvel utilisateur");
    console.log(this.newUser);
  }

}

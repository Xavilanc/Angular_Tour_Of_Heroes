import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { NewUser } from '../models/newUser';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  newUser?: NewUser;

  username = new FormControl('');
  mail = new FormControl('');
  password = new FormControl('');
  adress = this.formbuilder.group({
    street: [''],
    postcode: [0],
    city: ['']
  })


  constructor(private readonly formbuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.newUser = {
      username: this.username.value!,
      mail: this.mail.value!,
      password: this.password.value!,
      adress: {
        street: this.adress.get('street')?.value!,
        postcode: this.adress.get('postcode')?.value!,
        city: this.adress.get('city')?.value!
      }
    }
    console.log("création d'un nouvel utilisateur")
    console.log({
      Username: this.username.value,
      Mail: this.mail.value,
      Password: this.password.value,
      Adresse: {
        Street: this.adress.controls['street'].value,
        Postcode: this.adress.controls['postcode'].value,
        City: this.adress.controls['city'].value
      }
    })
  }

}

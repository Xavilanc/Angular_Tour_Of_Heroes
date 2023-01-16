import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up-reactive',
  templateUrl: './sign-up-reactive.component.html',
  styleUrls: ['./sign-up-reactive.component.css']
})
export class SignUpReactiveComponent implements OnInit {

  signInForm = this.fb.group({
    firstname: [''],
    lastname: [''],
    email: [''],
    password: ['']
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('signInForm submitted', this.signInForm.value);  
  }

}

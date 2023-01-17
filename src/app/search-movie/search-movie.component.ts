import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

import { isRequiredValidator } from '../validators/isRequiredValidator';
import { rangeDateValidator } from '../validators/rangeDateValidator';


@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  

  readonly searchMovieForm = this.fb.group({
    name: this.fb.group({
      id: ['', isRequiredValidator(this.getId(), this.getTitle())],
      title: ['', isRequiredValidator(this.getId(), this.getTitle())],
    }),
    type: [''],
    year: [1950, (control: AbstractControl): ValidationErrors | null => {
      return control.value > 1950 && control.value <= 2023 ? null : { 'date': { value: control.value}}
    }  ],
    fiche: ['']
  }) 

  submitted = false;

  constructor(private readonly fb: FormBuilder, private readonly cd: ChangeDetectorRef) {
    
   }

  ngOnInit(): void {
    console.log(typeof this.searchMovieForm.controls['year'].value );
    this.cd.detectChanges();  
  }

  onSubmit() {
      this.searchMovieForm.patchValue({
        fiche: 'courte'
      })
      this.submitted = true;
      console.log('search-movie Form submitted', this.searchMovieForm.value);  
  }

  getName(): FormGroup {
    return this.searchMovieForm.controls['name'] as FormGroup;
  }

  getId(): FormControl {
    return this.searchMovieForm?.controls['name'].controls['id'] as FormControl;
  }

  getTitle(): FormControl {
    return this.searchMovieForm?.controls['name'].controls['title'] as FormControl;
  }

  getYear(): number {
    return this.searchMovieForm?.controls['year'].value as number;
  }


}

import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

import { isRequiredValidator } from '../validators/isRequiredValidator';


@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  
  id: FormControl = new FormControl ('', isRequiredValidator(this.getTitle()));
  title: FormControl = new FormControl ('', isRequiredValidator(this.getId()));

  readonly searchMovieForm = this.fb.group({
    name: this.fb.group({
      id: this.id,
      title: this.title
    }),
    type: [''],
    year: [1950, (control: AbstractControl): ValidationErrors | null => {
      return control.value > 1950 && control.value <= 2023 ? null : { 'date': { value: control.value}}
    }  ],
    fiche: ['']
  }) 

  
  submitted = false;
  defaultValue = '';

  idChanges!: string;

  constructor(private readonly fb: FormBuilder, private readonly cd: ChangeDetectorRef) {
    
   }

  ngOnInit(): void {
    console.log('title initial = ' + this.getTitle());
    console.log('id initial = ' + this.searchMovieForm.controls['name'].controls['id'].value?.length);
    this.cd.detectChanges();

    this.getName().controls['id'].valueChanges.subscribe((value: string) => {
      this.getName().updateValueAndValidity()
      this.title.updateValueAndValidity()
    })

    this.getName().controls['title'].valueChanges.subscribe((value: string) => {
      this.getName().updateValueAndValidity()
      this.id.updateValueAndValidity()
    })

    // this.onChanges();
    
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   const newValue: SimpleChange = changes['searchMovieForm.name.id'];
  //   console.log('newValue = ' + newValue.currentValue)
  // }

  onSubmit() {
      this.searchMovieForm.patchValue({
        type: 'série',
        fiche: 'courte'
      })
      this.submitted = true;
      console.log('search-movie Form submitted', this.searchMovieForm.value);
      console.log('id onsubmit = ' + this.searchMovieForm.controls['name'].controls['id'].value?.length);  
  }

  // onChanges(): void {
  //   this.searchMovieForm.get('id')?.valueChanges.subscribe( val => {
  //     this.idChanges = val
  //   })
  //   console.log('changes = ' + this.idChanges)
  // }

  getName(): FormGroup {
    return this.searchMovieForm.controls['name'] as FormGroup;
  }

  getId(): number {
    return this.id?.value?.length as number;
  }

  getTitle(): number {
    return this.title?.value?.length as number;
  }

  getYear(): number {
    return this.searchMovieForm?.controls['year'].value as number;
  }


}

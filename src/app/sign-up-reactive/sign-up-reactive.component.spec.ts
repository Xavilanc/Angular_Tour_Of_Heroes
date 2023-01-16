import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpReactiveComponent } from './sign-up-reactive.component';

describe('SignUpReactiveComponent', () => {
  let component: SignUpReactiveComponent;
  let fixture: ComponentFixture<SignUpReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

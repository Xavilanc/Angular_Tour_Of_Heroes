import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnomatopiaFormComponent } from './onomatopia-form.component';

describe('OnomatopiaFormComponent', () => {
  let component: OnomatopiaFormComponent;
  let fixture: ComponentFixture<OnomatopiaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnomatopiaFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnomatopiaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

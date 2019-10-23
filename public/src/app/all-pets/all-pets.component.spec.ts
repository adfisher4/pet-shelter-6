import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPetsComponent } from './all-pets.component';

describe('AllPetsComponent', () => {
  let component: AllPetsComponent;
  let fixture: ComponentFixture<AllPetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

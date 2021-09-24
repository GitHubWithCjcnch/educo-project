import { ComponentFixture, TestBed } from '@angular/core/testing';

import { signInPageComponent } from './sign-in-page.component';

describe('signInPageComponent', () => {
  let component: signInPageComponent;
  let fixture: ComponentFixture<signInPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ signInPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(signInPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetIdPageComponent } from './get-id-page.component';

describe('GetIdPageComponent', () => {
  let component: GetIdPageComponent;
  let fixture: ComponentFixture<GetIdPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetIdPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetIdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

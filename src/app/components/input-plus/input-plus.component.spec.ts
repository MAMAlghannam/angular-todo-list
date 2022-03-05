import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPlusComponent } from './input-plus.component';

describe('InputComponent', () => {
  let component: InputPlusComponent;
  let fixture: ComponentFixture<InputPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPlusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

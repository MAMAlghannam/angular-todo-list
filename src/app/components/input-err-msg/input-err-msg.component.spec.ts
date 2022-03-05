import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputErrMsgComponent } from './input-err-msg.component';

describe('InputErrMsgComponent', () => {
  let component: InputErrMsgComponent;
  let fixture: ComponentFixture<InputErrMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputErrMsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputErrMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

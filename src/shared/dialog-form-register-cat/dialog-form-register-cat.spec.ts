import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormRegisterCat } from './dialog-form-register-cat';

describe('DialogFormRegisterCat', () => {
  let component: DialogFormRegisterCat;
  let fixture: ComponentFixture<DialogFormRegisterCat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogFormRegisterCat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogFormRegisterCat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

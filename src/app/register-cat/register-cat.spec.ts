import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCat } from './register-cat';

describe('RegisterCat', () => {
  let component: RegisterCat;
  let fixture: ComponentFixture<RegisterCat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterCat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterCat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

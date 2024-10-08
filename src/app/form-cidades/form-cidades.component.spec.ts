import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCidadesComponent } from './form-cidades.component';

describe('FormCidadesComponent', () => {
  let component: FormCidadesComponent;
  let fixture: ComponentFixture<FormCidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormCidadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

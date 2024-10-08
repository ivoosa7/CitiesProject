import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCidadesComponent } from './table-cidades.component';

describe('TableCidadesComponent', () => {
  let component: TableCidadesComponent;
  let fixture: ComponentFixture<TableCidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableCidadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableCidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

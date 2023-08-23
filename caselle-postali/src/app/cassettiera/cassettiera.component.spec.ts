import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CassettieraComponent } from './cassettiera.component';

describe('CassettieraComponent', () => {
  let component: CassettieraComponent;
  let fixture: ComponentFixture<CassettieraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CassettieraComponent]
    });
    fixture = TestBed.createComponent(CassettieraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

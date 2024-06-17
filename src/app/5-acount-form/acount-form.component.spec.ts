import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcountFormComponent } from './acount-form.component';

describe('AcountFormComponent', () => {
  let component: AcountFormComponent;
  let fixture: ComponentFixture<AcountFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcountFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

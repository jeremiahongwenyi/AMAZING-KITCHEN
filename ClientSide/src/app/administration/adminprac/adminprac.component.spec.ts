import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpracComponent } from './adminprac.component';

describe('AdminpracComponent', () => {
  let component: AdminpracComponent;
  let fixture: ComponentFixture<AdminpracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminpracComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminpracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

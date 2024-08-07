import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularcategoriesComponent } from './popularcategories.component';

describe('PopularcategoriesComponent', () => {
  let component: PopularcategoriesComponent;
  let fixture: ComponentFixture<PopularcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopularcategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopularcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

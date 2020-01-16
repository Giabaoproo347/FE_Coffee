import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDeteilComponent } from './category-deteil.component';

describe('CategoryDeteilComponent', () => {
  let component: CategoryDeteilComponent;
  let fixture: ComponentFixture<CategoryDeteilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryDeteilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryDeteilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

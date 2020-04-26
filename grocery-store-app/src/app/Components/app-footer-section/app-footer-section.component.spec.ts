import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFooterSectionComponent } from './app-footer-section.component';

describe('AppFooterSectionComponent', () => {
  let component: AppFooterSectionComponent;
  let fixture: ComponentFixture<AppFooterSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFooterSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFooterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

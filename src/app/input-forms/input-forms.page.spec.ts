import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputFormsPage } from './input-forms.page';

describe('InputFormsPage', () => {
  let component: InputFormsPage;
  let fixture: ComponentFixture<InputFormsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InputFormsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

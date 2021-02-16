import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFullwitdthComponent } from './template-fullwitdth.component';

describe('TemplateFullwitdthComponent', () => {
  let component: TemplateFullwitdthComponent;
  let fixture: ComponentFixture<TemplateFullwitdthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateFullwitdthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFullwitdthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

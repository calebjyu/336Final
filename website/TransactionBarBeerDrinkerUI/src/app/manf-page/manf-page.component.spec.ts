import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManfPageComponent } from './manf-page.component';

describe('ManfPageComponent', () => {
  let component: ManfPageComponent;
  let fixture: ComponentFixture<ManfPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManfPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManfPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

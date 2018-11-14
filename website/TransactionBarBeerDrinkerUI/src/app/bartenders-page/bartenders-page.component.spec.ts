import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BartendersPageComponent } from './bartenders-page.component';

describe('BartendersPageComponent', () => {
  let component: BartendersPageComponent;
  let fixture: ComponentFixture<BartendersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BartendersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BartendersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

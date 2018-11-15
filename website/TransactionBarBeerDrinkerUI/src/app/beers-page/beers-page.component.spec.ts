import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeersPageComponent } from './beers-page.component';

describe('BeersPageComponent', () => {
  let component: BeersPageComponent;
  let fixture: ComponentFixture<BeersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

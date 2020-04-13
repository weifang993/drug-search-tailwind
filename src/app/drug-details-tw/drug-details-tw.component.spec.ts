import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugDetailsTwComponent } from './drug-details-tw.component';

describe('DrugDetailsTwComponent', () => {
  let component: DrugDetailsTwComponent;
  let fixture: ComponentFixture<DrugDetailsTwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugDetailsTwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugDetailsTwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

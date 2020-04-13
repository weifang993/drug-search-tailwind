import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugSearchTwComponent } from './drug-search-tw.component';

describe('DrugSearchTwComponent', () => {
  let component: DrugSearchTwComponent;
  let fixture: ComponentFixture<DrugSearchTwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugSearchTwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugSearchTwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

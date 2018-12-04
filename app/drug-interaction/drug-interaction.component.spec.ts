import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugInteractionComponent } from './drug-interaction.component';

describe('DrugInteractionComponent', () => {
  let component: DrugInteractionComponent;
  let fixture: ComponentFixture<DrugInteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugInteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

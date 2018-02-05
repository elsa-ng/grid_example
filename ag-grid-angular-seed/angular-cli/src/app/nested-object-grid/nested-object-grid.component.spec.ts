import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedObjectGridComponent } from './nested-object-grid.component';

describe('NestedObjectGridComponent', () => {
  let component: NestedObjectGridComponent;
  let fixture: ComponentFixture<NestedObjectGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedObjectGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedObjectGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

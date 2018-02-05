import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedObjValFormComponent } from './nested-obj-val-form.component';

describe('NestedObjValFormComponent', () => {
  let component: NestedObjValFormComponent;
  let fixture: ComponentFixture<NestedObjValFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedObjValFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedObjValFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

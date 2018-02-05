import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayRendererComponent } from './array-renderer.component';

describe('ArrayRendererComponent', () => {
  let component: ArrayRendererComponent;
  let fixture: ComponentFixture<ArrayRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

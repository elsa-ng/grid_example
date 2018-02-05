import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistryRendererComponent } from './ministry-renderer.component';

describe('MinistryRendererComponent', () => {
  let component: MinistryRendererComponent;
  let fixture: ComponentFixture<MinistryRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinistryRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistryRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

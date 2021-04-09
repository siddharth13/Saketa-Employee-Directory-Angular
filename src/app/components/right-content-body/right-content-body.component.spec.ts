import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightContentBodyComponent } from './right-content-body.component';

describe('RightContentBodyComponent', () => {
  let component: RightContentBodyComponent;
  let fixture: ComponentFixture<RightContentBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightContentBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightContentBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

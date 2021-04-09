import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightContentHeaderComponent } from './right-content-header.component';

describe('RightContentHeaderComponent', () => {
  let component: RightContentHeaderComponent;
  let fixture: ComponentFixture<RightContentHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightContentHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightContentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

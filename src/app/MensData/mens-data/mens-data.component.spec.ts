import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensDataComponent } from './mens-data.component';

describe('MensDataComponent', () => {
  let component: MensDataComponent;
  let fixture: ComponentFixture<MensDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdgLibComponent } from './gdg-lib.component';

describe('GdgLibComponent', () => {
  let component: GdgLibComponent;
  let fixture: ComponentFixture<GdgLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GdgLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GdgLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopResCardComponent } from './pop-res-card.component';

describe('PopResCardComponent', () => {
  let component: PopResCardComponent;
  let fixture: ComponentFixture<PopResCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopResCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopResCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

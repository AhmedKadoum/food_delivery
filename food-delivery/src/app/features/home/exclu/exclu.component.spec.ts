import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluComponent } from './exclu.component';

describe('ExcluComponent', () => {
  let component: ExcluComponent;
  let fixture: ComponentFixture<ExcluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcluComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

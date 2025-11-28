import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuchiComponent } from './suchi.component';

describe('SuchiComponent', () => {
  let component: SuchiComponent;
  let fixture: ComponentFixture<SuchiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuchiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuchiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

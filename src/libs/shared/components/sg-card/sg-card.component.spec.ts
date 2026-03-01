import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgCardComponent } from './sg-card.component';

describe('SgCardComponent', () => {
  let component: SgCardComponent;
  let fixture: ComponentFixture<SgCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SgCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SgCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

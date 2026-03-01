import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgInputComponent } from './sg-input.component';

describe('SgInputComponent', () => {
  let component: SgInputComponent;
  let fixture: ComponentFixture<SgInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SgInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SgInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

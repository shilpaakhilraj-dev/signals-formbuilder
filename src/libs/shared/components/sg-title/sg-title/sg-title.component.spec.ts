import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgTitleComponent } from './sg-title.component';

describe('SgTitleComponent', () => {
  let component: SgTitleComponent;
  let fixture: ComponentFixture<SgTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SgTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SgTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

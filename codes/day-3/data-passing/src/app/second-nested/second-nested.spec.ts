import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondNested } from './second-nested';

describe('SecondNested', () => {
  let component: SecondNested;
  let fixture: ComponentFixture<SecondNested>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondNested]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondNested);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

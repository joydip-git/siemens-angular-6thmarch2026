import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirtNested } from './firt-nested';

describe('FirtNested', () => {
  let component: FirtNested;
  let fixture: ComponentFixture<FirtNested>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirtNested]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirtNested);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esperienze } from './esperienze';

describe('Esperienze', () => {
  let component: Esperienze;
  let fixture: ComponentFixture<Esperienze>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Esperienze],
    }).compileComponents();

    fixture = TestBed.createComponent(Esperienze);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

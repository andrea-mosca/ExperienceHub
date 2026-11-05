import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEsperienza } from './card-esperienza';

describe('CardEsperienza', () => {
  let component: CardEsperienza;
  let fixture: ComponentFixture<CardEsperienza>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardEsperienza],
    }).compileComponents();

    fixture = TestBed.createComponent(CardEsperienza);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

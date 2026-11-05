import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioEsperienza } from './dettaglio-esperienza';

describe('DettaglioEsperienza', () => {
  let component: DettaglioEsperienza;
  let fixture: ComponentFixture<DettaglioEsperienza>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DettaglioEsperienza],
    }).compileComponents();

    fixture = TestBed.createComponent(DettaglioEsperienza);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

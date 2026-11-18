import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { CardEffect } from './card-effect';

// Componente di prova che utilizza la direttiva
@Component({
  standalone: true,
  imports: [CardEffect],
  template: `<div appCardEffect></div>`,
})
class TestHostComponent {}

describe('CardEffect', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();
  });

  it('should create an instance', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();

    const elemento = fixture.nativeElement.querySelector('div');

    expect(elemento).toBeTruthy();
    expect(elemento.style.transition).toBe('transform 0.2s ease');
  });

  it('should apply hover effect', () => {
    const fixture = TestBed.createComponent(TestHostComponent);

    fixture.detectChanges();

    const elemento = fixture.nativeElement.querySelector('div');

    elemento.dispatchEvent(new Event('mouseenter'));

    expect(elemento.style.transform).toBe('scale(1.05)');

    elemento.dispatchEvent(new Event('mouseleave'));

    expect(elemento.style.transform).toBe('scale(1)');
  });
});

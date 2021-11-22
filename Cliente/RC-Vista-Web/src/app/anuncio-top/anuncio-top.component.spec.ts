import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioTopComponent } from './anuncio-top.component';

describe('AnuncioTopComponent', () => {
  let component: AnuncioTopComponent;
  let fixture: ComponentFixture<AnuncioTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnuncioTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnuncioTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
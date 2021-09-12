import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaExpandidaComponent } from './noticia-expandida.component';

describe('NoticiaExpandidaComponent', () => {
  let component: NoticiaExpandidaComponent;
  let fixture: ComponentFixture<NoticiaExpandidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaExpandidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaExpandidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

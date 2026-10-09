import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exemplo01 } from './exemplo01';

describe('Exemplo01', () => {
  let component: Exemplo01;
  let fixture: ComponentFixture<Exemplo01>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exemplo01],
    }).compileComponents();

    fixture = TestBed.createComponent(Exemplo01);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

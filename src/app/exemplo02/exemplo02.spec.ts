import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exemplo02 } from './exemplo02';

describe('Exemplo02', () => {
  let component: Exemplo02;
  let fixture: ComponentFixture<Exemplo02>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exemplo02],
    }).compileComponents();

    fixture = TestBed.createComponent(Exemplo02);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

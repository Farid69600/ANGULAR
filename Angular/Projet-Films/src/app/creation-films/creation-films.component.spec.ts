import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationFilmsComponent } from './creation-films.component';

describe('CreationFilmsComponent', () => {
  let component: CreationFilmsComponent;
  let fixture: ComponentFixture<CreationFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationFilmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponOptionComponent } from './weapon-option.component';

describe('WeaponOptionComponent', () => {
  let component: WeaponOptionComponent;
  let fixture: ComponentFixture<WeaponOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

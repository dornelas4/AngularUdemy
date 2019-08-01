import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameBindingComponent } from './username-binding.component';

describe('UsernameBindingComponent', () => {
  let component: UsernameBindingComponent;
  let fixture: ComponentFixture<UsernameBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernameBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

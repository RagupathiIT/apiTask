import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBootstrapModelComponent } from './user-bootstrap-model.component';

describe('UserBootstrapModelComponent', () => {
  let component: UserBootstrapModelComponent;
  let fixture: ComponentFixture<UserBootstrapModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserBootstrapModelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserBootstrapModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncodefileComponent } from './encodefile.component';

describe('EncodefileComponent', () => {
  let component: EncodefileComponent;
  let fixture: ComponentFixture<EncodefileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncodefileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncodefileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

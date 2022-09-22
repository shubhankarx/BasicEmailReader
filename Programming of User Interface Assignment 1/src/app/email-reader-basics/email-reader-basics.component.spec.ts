import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailReaderBasicsComponent } from './email-reader-basics.component';

describe('EmailReaderBasicsComponent', () => {
  let component: EmailReaderBasicsComponent;
  let fixture: ComponentFixture<EmailReaderBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailReaderBasicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailReaderBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

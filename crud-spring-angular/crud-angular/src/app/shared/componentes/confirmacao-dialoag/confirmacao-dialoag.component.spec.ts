import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacaoDialoagComponent } from './confirmacao-dialoag.component';

describe('ConfirmacaoDialoagComponent', () => {
  let component: ConfirmacaoDialoagComponent;
  let fixture: ComponentFixture<ConfirmacaoDialoagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmacaoDialoagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmacaoDialoagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

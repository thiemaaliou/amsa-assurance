import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReturnmentPage } from './returnment.page';

describe('ReturnmentPage', () => {
  let component: ReturnmentPage;
  let fixture: ComponentFixture<ReturnmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReturnmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

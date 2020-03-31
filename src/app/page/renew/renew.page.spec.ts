import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RenewPage } from './renew.page';

describe('RenewPage', () => {
  let component: RenewPage;
  let fixture: ComponentFixture<RenewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RenewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

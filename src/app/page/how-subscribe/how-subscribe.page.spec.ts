import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HowSubscribePage } from './how-subscribe.page';

describe('HowSubscribePage', () => {
  let component: HowSubscribePage;
  let fixture: ComponentFixture<HowSubscribePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowSubscribePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HowSubscribePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

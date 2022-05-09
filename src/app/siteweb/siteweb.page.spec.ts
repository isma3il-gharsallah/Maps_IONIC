import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SitewebPage } from './siteweb.page';

describe('SitewebPage', () => {
  let component: SitewebPage;
  let fixture: ComponentFixture<SitewebPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitewebPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SitewebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

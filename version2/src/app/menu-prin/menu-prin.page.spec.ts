import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuPrinPage } from './menu-prin.page';

describe('MenuPrinPage', () => {
  let component: MenuPrinPage;
  let fixture: ComponentFixture<MenuPrinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPrinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuPrinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

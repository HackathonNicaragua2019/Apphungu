import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiccionarioPage } from './diccionario.page';

describe('DiccionarioPage', () => {
  let component: DiccionarioPage;
  let fixture: ComponentFixture<DiccionarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiccionarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiccionarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

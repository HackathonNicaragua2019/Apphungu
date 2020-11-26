import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-prin',
  templateUrl: './menu-prin.page.html',
  styleUrls: ['./menu-prin.page.scss'],
})
export class MenuPrinPage implements OnInit {
  
  backdropVisible = true;

  constructor(private ChangeDetectorRef: ChangeDetectorRef) { }

  slidesOptions = {
    slidesPerView: 1.5
  }

  ngOnInit() {
    
  }


  

}

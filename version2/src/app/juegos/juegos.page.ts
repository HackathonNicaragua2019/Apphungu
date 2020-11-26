import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.page.html',
  styleUrls: ['./juegos.page.scss'],
})
export class JuegosPage implements OnInit {

  constructor() { }

  options ={
    centerSlider: true,
    loop: true,
    spaceBetween: -90,
  };

  ngOnInit() {
  }

}

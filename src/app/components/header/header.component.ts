import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  actionsConfigs = [
    {
      txt: 'Home',
      img: '../../../assets/icons/pikachu-frente.png',
    },
    {
      txt: 'Pokedex',
      img: '../../../assets/icons/pokebola.png',
    },
  ];

  constructor() {}

  ngOnInit() {}
}

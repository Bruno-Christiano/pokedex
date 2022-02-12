import { Component, OnInit } from '@angular/core';
import { ConfigFooter } from 'src/app/models/config-footer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  config: ConfigFooter = {
    title: 'Pokedex',
    sub: 'Developed By:',
    img: '../../../assets/icons/pokebola.png',
    link: 'https://www.linkedin.com/in/bruno-cristiano-santos/',
    desc: 'Bruno Cristiano',
    year: 2022,
  };

  constructor() {}

  ngOnInit() {}
}

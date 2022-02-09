import { Component, Input, OnInit } from '@angular/core';
import { ConfigFooter } from 'src/app/models/config-footer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input() configFooter: ConfigFooter = {
    title: '',
    sub: '',
    img: '../../../assets/img/img-default.jpg',
    link: '',
    desc: '',
    year: 0,
  };
  constructor() {}

  ngOnInit() {}
}

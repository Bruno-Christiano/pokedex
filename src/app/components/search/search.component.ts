import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Pokemon } from 'src/app/models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() valueSrc = new EventEmitter<string>();

  valueLabel = 'Clear me';
  icon = 'fa-solid fa-xmark';
  constructor() {}

  ngOnInit(): void {}

  search(event: any) {
    const pokemon = event.target.value;
    this.valueSrc.emit(pokemon);
    console.log(event);
  }
}

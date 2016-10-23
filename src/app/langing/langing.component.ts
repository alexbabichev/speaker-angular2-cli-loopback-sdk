import { Component, OnInit } from '@angular/core';
import { Phrase } from './../phrase';

@Component({
  selector: 'app-langing',
  templateUrl: './langing.component.html',
  styleUrls: ['./langing.component.scss']
})
export class LangingComponent implements OnInit {

  phrases: Phrase[] = [{
    id: 1,
    ru: 'test1',
    pl: 'translate',
    tags: ['tag1', 'tag2']
  }, {
    id: 2,
    ru: '2test1',
    pl: '2translate',
    tags: ['tag2']
  }];

  constructor() {}

  ngOnInit() {
    console.log('My name is', this.phrases);
  }

}

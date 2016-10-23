import { Component, OnInit } from '@angular/core';
import { Phrase } from './../phrase';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  phrase = new Phrase();

  constructor() { }

  ngOnInit() {
  }

  save() { 
    console.log(this.phrase);
  }

}

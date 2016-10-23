import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Title]
})
export class AppComponent {
  title = 'app works!';
  constructor(private titleService: Title){
    this.setTitle( 'App2!' )
    console.log(132); 
  }
  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}

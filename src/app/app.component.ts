import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';  //this is not mutable tried changing it to project 2 but it didnot reflect in the browser
  constructor(private titleService:Title){
    titleService.setTitle('flop')
  }
}

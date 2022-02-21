import { Component } from '@angular/core';
import sampleData from './data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'courses_managment_system';
  static staticData: any = sampleData;

  ngOnInit(){
    console.log(AppComponent.staticData);
  }
}

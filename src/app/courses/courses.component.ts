import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';

interface USERS {
  id: Number;
  name: String;
  username: String;
  email: String;
}
interface Courses {
  name: string;
  description: string;
  category: string;
  subject: string;
  startTime: string;
  endTime: string;
  studentsCount: number;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  searchTerm: any;
  term: any;

  Courses = AppComponent.staticData.courses;
  constructor(private http: HttpClient) {
    console.log(this.Courses);
  }
  ngOnInit(): void {
    console.log(this.Courses);
  }
}

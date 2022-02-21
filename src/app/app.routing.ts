import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {CoursesComponent} from "./courses/courses.component";
import { EditprofileComponent } from './editprofile/editprofile.component';
import { AddcoursesComponent } from './addcourses/addcourses.component';



const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'courses', component: CoursesComponent},
  {path: 'editprofile', component: EditprofileComponent},
  {path: 'addcourses', component: AddcoursesComponent}
  

];

export const routing = RouterModule.forRoot(appRoutes);

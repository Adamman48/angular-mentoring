import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './features/courses/courses-page/courses.component';
import { CoursesModule } from './features/courses/courses.module';

const routes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CoursesModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}

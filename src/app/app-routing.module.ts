import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesModule } from './directives/directives.module';
import { CoursesComponent } from './features/courses/courses-page/courses.component';
import { CoursesModule } from './features/courses/courses.module';

const routes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CoursesModule, DirectivesModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}

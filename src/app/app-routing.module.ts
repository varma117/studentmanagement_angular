import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavestudentComponent } from './components/savestudent/savestudent.component';
import { GetstudentsComponent } from './components/getstudents/getstudents.component';

const routes: Routes = [{path:'savestudent', component:SavestudentComponent},{path:'getstudents',component:GetstudentsComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
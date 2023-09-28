import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoutineDetailComponent} from './routine-detail/routine-detail.component'
import {RoutineListComponent} from './routine-list/routine-list.component'



const routes: Routes = [
  {path:'routine-detail', component: RoutineDetailComponent},
  {path:'', component: RoutineListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

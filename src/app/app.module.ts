import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutineDetailComponent } from './routine-detail/routine-detail.component';
import { RoutineListComponent } from './routine-list/routine-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutineDetailComponent,
    RoutineListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

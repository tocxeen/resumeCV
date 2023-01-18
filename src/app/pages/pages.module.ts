import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutes } from './pages.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    PagesRoutes
  ],
  declarations: [HomeComponent]
})
export class PagesModule { }

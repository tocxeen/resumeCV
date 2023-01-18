import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../shared/layout/layout.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,

    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
    ]
  },


];

export const PagesRoutes = RouterModule.forChild(routes);

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
    
  ],
  exports: [LayoutComponent,NavbarComponent,FooterComponent],
  declarations: [LayoutComponent,NavbarComponent,FooterComponent]
})
export class SharedModule { }

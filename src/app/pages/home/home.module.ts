import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular'; // ng add @clr/angular FROM: https://clarity.design/documentation/datagrid/structure
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ClarityModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '', redirectTo: 'menu/inicio'
  },
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'details',
        loadChildren: '../todo-details/todo-details.module#TodoDetailsPageModule'
      },
      {
        path: ':grado',
        loadChildren: '../inicio/inicio.module#InicioPageModule'
      },
      {
        path: 'details/:id',
        loadChildren: '../todo-details/todo-details.module#TodoDetailsPageModule'
      },
    ],
  },
];

@NgModule({
  declarations: [
    MenuPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
})
export class MenuPageModule { }

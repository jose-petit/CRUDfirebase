import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children : [
      {
        path: 'primero',
        loadChildren: '../primero/primero.module#PrimeroPageModule'
        },
      {
        path: 'segundo',
        loadChildren: '../segundo/segundo.module#SegundoPageModule'
      },
      {
        path: 'tercero',
        loadChildren: '../tercero/tercero.module#TerceroPageModule'
      },
      {
        path: 'cuarto',
        loadChildren: '../cuarto/cuarto.module#CuartoPageModule'
      },
      {
        path: 'quinto',
        loadChildren: '../quinto/quinto.module#QuintoPageModule'
      },
      {
        path: 'quintob',
        loadChildren: '../quintob/quintob.module#QuintobPageModule'
      },
      {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule'
      },
      {
        path: 'todo-details',
        loadChildren: '../todo-details/todo-details.module#TodoDetailsPageModule'
      },
      {
        path: 'details/:id',
        loadChildren: '../todo-details/todo-details.module#TodoDetailsPageModule'
      },
      {
        path: 'details',
        loadChildren: '../todo-details/todo-details.module#TodoDetailsPageModule'
      },
    ]
  },
  {
     path: '',
     redirectTo: 'menu/home'
  },

];



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}

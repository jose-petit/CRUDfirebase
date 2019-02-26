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
        path: 'inicio',
        loadChildren: '../inicio/inicio.module#InicioPageModule'
      },
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
        path: 'quinto-a',
        loadChildren: '../quinto-a/quinto-a.module#QuintoAPageModule'
      },
      {
        path: 'quinto-b',
        loadChildren: '../quinto-b/quinto-b.module#QuintoBPageModule'
      },
    ]
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
export class MenuPageModule { }

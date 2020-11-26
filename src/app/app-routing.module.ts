import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'menu-prin',
    loadChildren: () => import('./menu-prin/menu-prin.module').then( m => m.MenuPrinPageModule)
  },
  {
    path: 'traduc-dicc',
    loadChildren: () => import('./traduc-dicc/traduc-dicc.module').then( m => m.TraducDiccPageModule)
  },
  {
    path: 'diccionario',
   children: [
     {
       path: "",
       loadChildren: () => import('./diccionario/diccionario.module').then( m => m.DiccionarioPageModule)
     },
     {
       path: ":dicId",
       loadChildren: () => import('./diccionario/dic-espaniol/dic-espaniol.module').then(m => m.DicEspaniolPageModule)
     }
   ]
  },  {
    path: 'traductor',
    loadChildren: () => import('./traductor/traductor.module').then( m => m.TraductorPageModule)
  },
  {
    path: 'juegos',
    loadChildren: () => import('./juegos/juegos.module').then( m => m.JuegosPageModule)
  },
  {
    path: 'cancionero',
    loadChildren: () => import('./cancionero/cancionero.module').then( m => m.CancioneroPageModule)
  },
  {
    path: 'ong',
    loadChildren: () => import('./ong/ong.module').then( m => m.OngPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./registrar/registrar.module').then( m => m.RegistrarPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

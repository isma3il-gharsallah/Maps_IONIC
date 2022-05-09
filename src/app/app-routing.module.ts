import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'siteweb',
    pathMatch: 'full'
  },
  

 
  {
    path: 'presentation',
    loadChildren: () => import('./presentation/presentation.module').then( m => m.PresentationPageModule)
  },


  {
    path: 'siteweb',
    loadChildren: () => import('./siteweb/siteweb.module').then( m => m.SitewebPageModule)
  },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

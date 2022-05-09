import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SitewebPage } from './siteweb.page';

const routes: Routes = [
  {
    path: '',
    component: SitewebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SitewebPageRoutingModule {}

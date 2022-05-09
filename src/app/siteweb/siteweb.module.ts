import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SitewebPageRoutingModule } from './siteweb-routing.module';

import { SitewebPage } from './siteweb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SitewebPageRoutingModule
  ],
  declarations: [SitewebPage]
})
export class SitewebPageModule {}

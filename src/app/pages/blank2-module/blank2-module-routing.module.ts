import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Blank2ModuleComponent } from './blank2-module.component';
import { Blank21Component } from './blank21/blank21.component';

const routes: Routes = [
  { path: '', component: Blank2ModuleComponent },
  { path: 'blank21', component: Blank21Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Blank2ModuleRoutingModule { }

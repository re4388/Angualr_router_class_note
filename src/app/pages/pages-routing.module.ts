import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { BlankComponent } from './blank/blank.component';

const routes: Routes = [
  { path: '', component: PagesComponent },
  { path: 'blank', component: BlankComponent },
  {
    path: 'blank2Module',
    loadChildren: () => import('../pages/blank2-module/blank2-module.module')
      .then(m => m.Blank2ModuleModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

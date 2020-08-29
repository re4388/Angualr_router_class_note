import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { ColorComponent } from './utilities/color/color.component';
import { OtherComponent } from './utilities/other/other.component';
import { BorderComponent } from './utilities/border/border.component';
import { AnimationComponent } from './utilities/animation/animation.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'page1', component: Page1Component },
      { path: 'page2', component: Page2Component },
      {
        path: 'utilities',
        children: [
          { path: 'color', component: ColorComponent },
          { path: 'color/:type', component: ColorComponent }
        ]
      },
      {
        path: 'utilities',
        children: [
          { path: 'other', component: OtherComponent }
        ]
      },
      {
        path: 'utilities',
        children: [
          { path: 'border', component: BorderComponent }
        ]
      },
      {
        path: 'utilities',
        // component: '',
        children: [
          { path: 'animation', component: AnimationComponent }
        ]
      },
      {
        path: 'pages',
        loadChildren: () => import('./pages/pages.module')
          .then(m => m.PagesModule)
      },
    ]
  },


  // {
  //   path: 'blank2Module',
  //   loadChildren: () => import('./pages/blank2-module/blank2-module.module')
  //     .then(m => m.Blank2ModuleModule)
  // },
  // in real word, don't use this wild card 404 not found page..
  // if you code have issue..this wildcard will go to your defined 404
  // it's hard to debug
  // { path: '**', component: PathNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {
        useHash: true,
        // you can preload...
        // speed up when u later lazy-load
        // since it will just async load when first loading
        // but if there are too much module..not use this
        preloadingStrategy: PreloadAllModules,
      })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Blank2ModuleRoutingModule } from './blank2-module-routing.module';
import { Blank2ModuleComponent } from './blank2-module.component';
import { Blank21Component } from './blank21/blank21.component';


@NgModule({
  declarations: [Blank2ModuleComponent, Blank21Component],
  imports: [
    CommonModule,
    Blank2ModuleRoutingModule
  ]
})
export class Blank2ModuleModule { }

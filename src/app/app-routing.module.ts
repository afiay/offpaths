import { ContactsMainComponent } from './contacts/main-contacts.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from 'projects/offpaths/src/app/app.module';


const routes: Routes = [];

@NgModule({
  imports: [CommonModule, RouterModule, RouteModule
  ],
  exports: [AppModule, RouterModule]
})
export class RouteModule { }

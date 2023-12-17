import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiffComponent } from './page/liff/liff.component';
import {HomeComponent} from "./page/home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'share',
    component: LiffComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
